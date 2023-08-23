import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
} from 'react-native-health';

const permissions: HealthKitPermissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.FlightsClimbed,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
        ],
        write: [],
    },
};

const useHealthData = (date: Date) => {
    const [hasPermissions, setHasPermission] = useState(false);
    const [steps, setSteps] = useState(0);
    const [flights, setFlights] = useState(0);
    const [distance, setDistance] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const [mostStepsOfAllTime, setMostStepsOfAllTime] = useState(0);

    useEffect(() => {
        if (Platform.OS !== 'ios') {
            return;
        }

        AppleHealthKit.isAvailable((err, isAvailable) => {
            if (err) {
                console.log('Error checking availability');
                return;
            }
            if (!isAvailable) {
                console.log('Apple Health not available');
                return;
            }
            AppleHealthKit.initHealthKit(permissions, (err) => {
                if (err) {
                    console.log('Error getting permissions');
                    return;
                }
                setHasPermission(true);
            });
        });
    }, []);

    useEffect(() => {
        if (!hasPermissions) {
            return;
        }

        const options: HealthInputOptions = {
            date: date?.toISOString(),
            includeManuallyAdded: false,
        };

        AppleHealthKit.getStepCount(options, (err, results) => {
            if (err) {
                console.log('Error getting the steps');
                return;
            }
            setSteps(results.value);
        });

        AppleHealthKit.getFlightsClimbed(options, (err, results) => {
            if (err) {
                console.log('Error getting the flights:', err);
                return;
            }
            setFlights(results.value);
        });

        AppleHealthKit.getDistanceWalkingRunning(options, (err, results) => {
            if (err) {
                console.log('Error getting the distance:', err);
                return;
            }
            setDistance(results.value);
        });

        // Calculate longest streak and most steps done of all time
        AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {
            if (err) {
                console.log('Error getting the step samples:', err);
                return;
            }
            let currentStreak = 0;
            let longestStreakSoFar = 0;
            let maxSteps = 0;

            for (const sample of results) {
                if (sample.value >= 10000) {
                    currentStreak++;
                    longestStreakSoFar = Math.max(longestStreakSoFar, currentStreak);
                } else {
                    currentStreak = 0;
                }
                maxSteps = Math.max(maxSteps, sample.value);
            }

            setLongestStreak(longestStreakSoFar);
            setMostStepsOfAllTime(maxSteps);
        });
    }, [hasPermissions, date]);

    return { steps, flights, distance, longestStreak, mostStepsOfAllTime };
};

export default useHealthData;

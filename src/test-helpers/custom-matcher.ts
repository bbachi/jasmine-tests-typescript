import MatchersUtil = jasmine.MatchersUtil;
import CustomMatcherFactories = jasmine.CustomMatcherFactories;
import CustomEqualityTester = jasmine.CustomEqualityTester;
import CustomMatcher = jasmine.CustomMatcher;
import CustomMatcherResult = jasmine.CustomMatcherResult;

export const PersonCustomMatchers: CustomMatcherFactories = {
    toBeOlderThan: function (util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomMatcher {
        return {
            compare: function (actual: any, expected: any): CustomMatcherResult {
                if (actual > expected) {
                    return {
                        pass: true,
                        message: `test is passed`
                    };
                }
                else {
                    return {
                        pass: false,
                        message: `test fails`
                    };
                }
            }
        };
    },
    toBeFirstNameEqualTo: function (util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomMatcher {
        return {
            compare: function (actual: any, expected: any): CustomMatcherResult {
                var firstName = actual.split(' ')[0];
                if (firstName === expected) {
                    return {
                        pass: true,
                        message: `test is passed`
                    };
                }
                else {
                    return {
                        pass: false,
                        message: `test fails`
                    };
                }
            }
        };
    },
    toBeLastNameEqualTo: function (util: MatchersUtil, customEqualityTester: CustomEqualityTester[]): CustomMatcher {
        return {
            compare: function (actual: any, expected: any): CustomMatcherResult {
                var lastName = actual.split(' ')[1];
                if (lastName === expected) {
                    return {
                        pass: true,
                        message: `test is passed`
                    };
                }
                else {
                    return {
                        pass: false,
                        message: `test fails`
                    };
                }
            }
        };
    }
};
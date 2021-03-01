// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    // part of the rubric asked for at least three tested JS functions, so i would have like to see some here
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

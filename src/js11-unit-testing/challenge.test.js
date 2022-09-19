import * as challenge from "./js11";

test("correct greeting", () => {
    expect (challenge.greet()).toBe("Hello, nice to meet you");
})

test("adds two numbers and returns the sum", () => {
    expect (challenge.sumTwoNumbers(1, 4).toBe(5));
    expect (challenge.sumTwoNumbers(8, 9).toBe(17));
    expect (challenge.sumTwoNumbers(-5, 5).toBe(0));
    expect (challenge.sumTwoNumbers(360, 18).toBe(378));
})

test("check if one number is larger than the other", () =>{
    expect (challenge.checkLarger (5, 5).toBe("Both numbers are equal"));
    expect (challenge.checkLarger (8, 2).toBe(`8 is bigger than 2`));
    expect (challenge.checkLarger (75, 598).toBe(`598 is bigger than 75`));
})
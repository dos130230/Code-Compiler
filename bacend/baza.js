let baza = [
	{
		name:"Add up the Numbers from a Single Number",
		question:`
		Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
		`,
		examples:"./img/ques1.png",
		notes:"Expect any positive number between 1 and 1000",
		func: `function addUp(a) {}`,
		test:[['addUp(4)', 10],['addUp(111)', 6216],['addUp(23)', 276],['addUp(53)', 1431]]
	},
	{
		name:"What's Hiding Amongst the Crowd?",
		question:` 
			A word is on the loose and now has tried to hide amongst a crowd of tall letters!
			Help write a function to detect what the word is, knowing the following rules:

			The wanted word is in lowercase.
			The crowd of letters is all in uppercase.
			Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
		`,
		examples:"./img/ques2.png",
		notes:"N/A",
		func: `function detectWord(a) {}`,
		test:[['detectWord("bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh")', "brash"],['detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")', "embezzlement"]]


	},

	{
		name:"Buggy Code (Part 5)",
		question:`
			Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
		`,
		examples:"./img/ques3.png",
		notes:`
			READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
			Don't overthink this challenge; it's not supposed to be hard.
		`,
		func: `function printArray(a) {}`,
		test:[["printArray(2)", [1,2]],["printArray(7)", [1,2,3,4,5,6,7]],["printArray(10)", [1,2,3,4,5,6,7,8,9,10]]]
	}


]


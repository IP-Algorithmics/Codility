using System;
using System.Linq;
using System.Text;

// given a string that contains only a and b 
// in how many ways can you split the string to contain 3 parts with the same number of "a" in every substring 
namespace ConsoleApp3
{
    class ProgramV2
    {
        static void Main(string[] args)
        {
            Console.WriteLine(test("bbbbb"));
            Console.WriteLine(test("baabbaaaab"));
        }

        static int test(string S)
        {
            var nrOfA = S.Count(r => r == 'a');
            if(nrOfA % 3 != 0)
            {
                return 0;
            }

            // if the number of a is 0 then we have combinations of strings length - 1 taken in groups of 2, 
            // the formula is  nCr = n! / r! * (n - r)!
            if (nrOfA == 0)
            {
                return nCr(S.Length - 1, 2);
            }

            var first = new StringBuilder("");
            var second = new StringBuilder("");
            var third = new StringBuilder("");

            var firstA = 0;
            var secoundA = 0;
            var thirdA= 0;
            // split the initial string in 3 strings with the same number of a
            foreach (var c in S)
            {
                // finished in a
                if(firstA != nrOfA / 3)
                {
                    if (c == 'a') firstA++;
                    first.Append(c);
                    continue;
                }
                // finished in a
                if (secoundA != nrOfA / 3)
                {
                    if (c == 'a') secoundA++;
                    second.Append(c);
                    continue;
                }
                // cannnot be split more than that
                if (thirdA != nrOfA / 3)
                {
                    if (c == 'a') thirdA++;
                    third.Append(c);
                }
            }

            int x = 1;
            for(int i = 0; i < second.Length; i++)
            {
                if(second[i] != 'a')
                {
                    x++;
                }
                else
                {
                    break;
                }
            }

            int y = 1;
            for (int i = 0; i < third.Length; i++)
            {
                if (third[i] != 'a')
                {
                    y++;
                }
                else
                {
                    break;
                }
            }

            return x*y;
        }

        public static int nCr(int n, int r)
        {
            // naive: return Factorial(n) / (Factorial(r) * Factorial(n - r));
            return nPr(n, r) / Factorial(r);
        }

        public static int nPr(int n, int r)
        {
            // naive: return Factorial(n) / Factorial(n - r);
            return FactorialDivision(n, n - r);
        }

        private static int FactorialDivision(int topFactorial, int divisorFactorial)
        {
            int result = 1;
            for (int i = topFactorial; i > divisorFactorial; i--)
                result *= i;
            return result;
        }

        private static int Factorial(int i)
        {
            if (i <= 1)
                return 1;
            return i * Factorial(i - 1);
        }

    }
}

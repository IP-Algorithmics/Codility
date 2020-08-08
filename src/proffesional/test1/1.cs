using System;
using System.Collections.Generic;
using System.Linq;

// given a string and 2 arrays , S - contains letters as Tags for each point
// X - array of x coordinates for points
// Y - array of Y coordinates for points
// so S[0],X[0],Y[0] is the point with Tag S[0] and coordinates x,y
// how big can you draw a circle  from 0,0  until you encounter a Point with a Tag that was already used


// Improvement 
// should compute the distance from the center to each point then sort the array based on the increasing distance 
// iterate the array and stop at the first duplicate tag.

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Test("AAB", new int[] { 1, -1, 2 }, new int[] { 1, -1, -2 }));
        }

        static int Test(string S, int[] X, int[] Y)
        {
            int result = 0;

            int i = 1;
            while(true)
            {
                bool br = false;
                var contained = new HashSet<char>();
                for(int j = 0; j < S.Length; j++)
                {
                    if (Math.Sqrt(  (double)(Math.Pow(X[j], 2) + Math.Pow(Y[j], 2))  ) < i)
                    {
                        if (!contained.Contains(S[j]))
                        {
                            contained.Add(S[j]);
                        }
                        else
                        {
                            br = true;
                            break;
                        }
                    }
                }
                if (br)
                {
                    break;
                }
                result = contained.Count();
                i++;
            }

            return result;
        }
    }
}

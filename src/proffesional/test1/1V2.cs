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
    class ProgramV2
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Test("AAB", new int[] { 1, -1, 2 }, new int[] { 1, -1, -2 }));
        }

        static int Test(string S, int[] X, int[] Y)
        {
            var pointsDistance = S.Split("").ZipThree(X, Y, (tag, x, y) =>
                new {
                    Tag = tag,
                    Distance = Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2))
                }).ToList();

            pointsDistance = pointsDistance.OrderBy(x => x.Distance).ToList();
            var contained = new HashSet<string>();
            for (var i = 0; i < pointsDistance.Count; i++)
            {
                if (!contained.Contains(pointsDistance[i].Tag))
                {
                    contained.Add(pointsDistance[i].Tag);
                }
                else
                {
                    break;
                }
            }

            return contained.Count;
        }
    }

    public static class Extensions
    {
        public static IEnumerable<TResult> ZipThree<T1, T2, T3, TResult>(
            this IEnumerable<T1> source,
            IEnumerable<T2> second,
            IEnumerable<T3> third,
            Func<T1, T2, T3, TResult> func)
        {
            using (var e1 = source.GetEnumerator())
            using (var e2 = second.GetEnumerator())
            using (var e3 = third.GetEnumerator())
            {
                while (e1.MoveNext() && e2.MoveNext() && e3.MoveNext())
                    yield return func(e1.Current, e2.Current, e3.Current);
            }
        }
    }
}

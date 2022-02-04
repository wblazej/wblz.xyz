export const quotes = [
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant", author: "Robert Louis Stevenson"},
    {quote: "The way to get started is to quit talking and begin doing", author: "Walt Disney"},
    {quote: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt"},
    {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn", author: "Benjamin Franklin"},
    {quote: "Success usually comes to those who are too busy to be looking for it", author: "Henry David Thoreau"},
    {quote: "The secret of success is to do the common thing uncommonly well", author: "John D. Rockefeller Jr."},
    {quote: "Life is ten percent what happens to you and ninety percent how you respond to it", author: "Charles Swindoll"},
    {quote: "Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter", author: "Francis Chan"}
]

export const code = `for _ in range(int(input())):
n, s = int(input()), input()

t = set({s[0]})
for i in range(1, len(s)):
if s[i] in t and s[i - 1] != s[i]:
    print("NO")
    break
t.add(s[i])
else:
print("YES")`

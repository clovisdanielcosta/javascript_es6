eixo_X = [	
100	,
64	,
68	,
54	,
61	,
20	,
18	,
19	,
71	,
76	,
34	,
64	,
31	,
35	,
16	,
93	,
4	,
1	,
97	,
47	,
33	,
0	,
17	,
23	,
67	,
55	,
28	,
98	,
56	,
75	,
17	,
51	,
94	,
43	,
36	,
7	,
77	,
47	,
35	,
20	,
41	,
0	,
95	,
93	,
82	,
82	,
18	,
56	,
97	,
84	,
16	,
66	,
0	,
59	,
65	,
89	,
39	,
4	,
63	,
24	,
31	,
78	,
1	,
97	,
33	,
89	,
33	,
44	,
64	,
58	,
18	,
51	,
99	,
63	,
2	,
8	,
42	,
22	,
25	,
26	,
61	,
68	,
26	,
77	,
66	,
41	,
91	,
99	,
67	,
72	,
13	,
50	,
99	,
18	,
67	,
99	,
93	,
40	,
65	,
41	,
10	
]	

eixo_Y = [	
100	,
56	,
68	,
70	,
58	,
84	,
32	,
1	,
75	,
90	,
92	,
8	,
12	,
62	,
94	,
10	,
12	,
92	,
75	,
69	,
2	,
15	,
7	,
70	,
16	,
70	,
11	,
71	,
68	,
55	,
2	,
79	,
13	,
24	,
43	,
62	,
65	,
63	,
49	,
19	,
9	,
55	,
66	,
46	,
90	,
40	,
66	,
23	,
88	,
53	,
93	,
78	,
26	,
48	,
26	,
29	,
5	,
94	,
72	,
20	,
73	,
58	,
89	,
91	,
63	,
21	,
34	,
84	,
16	,
48	,
3	,
12	,
74	,
71	,
30	,
22	,
22	,
67	,
54	,
60	,
50	,
85	,
31	,
50	,
8	,
84	,
62	,
18	,
79	,
86	,
84	,
53	,
98	,
14	,
16	,
39	,
98	,
54	,
95	,
38	,
70	
]

let pessoas = [],
    riscoDeContagio = 0

for (let i = 0; i < eixo_X.length; i++) {
    let X = eixo_X[i];
    let Y = eixo_Y[i];
    pessoas.push({X, Y});
}
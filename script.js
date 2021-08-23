let inpu = document.getElementById("username");
let button = document.getElementById("bt");
let error = document.getElementById("error");
let se = document.getElementById("set");
let hom = document.getElementById("nhome");
let so = document.getElementById("nset");
let nrandom = document.getElementById("nrandom");
let ncontests = document.getElementById("ncontests");
let nfriends = document.getElementById("nfriends");
let mai = document.getElementById("main-con");
let main = document.getElementById("main");
let random = document.getElementById("random");
let contests = document.getElementById("contests");
let friends = document.getElementById("friends");
let user_id = null;
let dpq = [
    [1560, "F2", "Nearest Beautiful Number (hard version)", 2100],
    [1559, "E", "Mocha and Stars", 2200],
    [1559, "B", "Mocha and Red and Blue", 900],
    [1557, "D", "Ezzat and Grid", 2200],
    [1557, "C", "Moamen and XOR", 1700],
    [1555, "D", "Say No to Palindromes", 1600],
    [1555, "C", "Coin Rows", 1300],
    [1554, "E", "You", 2600],
    [1553, "I", "Stairs", 3400],
    [1553, "D", "Backspace", 1500],
    [1553, "C", "Penalty", 1200],
    [1553, "B", "Reverse String", 1300],
    [1552, "F", "Telepanting", 2200],
    [1552, "D", "Array Differentiation", 1800],
    [1551, "F", "Equidistant Vertices", 2200],
    [1551, "E", "Fixed Points", 2000],
    [1550, "F", "Jumping Around", 2700],
    [1550, "E", "Stringforces", 2500],
    [1549, "B", "Gregor and the Pawn Game", 800],
    [1548, "C", "The Three Little Pigs", 2500],
    [1547, "G", "How Many Paths?", 2100],
    [1547, "E", "Air Conditioners", 1500],
    [1545, "F", "AquaMoon and Potatoes", 3500],
    [1545, "E2", "AquaMoon and Time Stop (hard version)", 3500],
    [1545, "E1", "AquaMoon and Time Stop (easy version)", 3500],
    [1542, "E2", "Abnormal Permutation Pairs (hard version)", 2700],
    [1542, "E1", "Abnormal Permutation Pairs (easy version)", 2400],
    [1542, "D", "Priority Queue", 2200],
    [1540, "C2", "Converging Array (Hard Version)", 2900],
    [1540, "C1", "Converging Array (Easy Version)", 2700],
    [1540, "B", "Tree Array", 2300],
    [1539, "E", "Game with Cards", 2500],
    [1539, "B", "Love Song", 800],
    [1538, "F", "Interesting Function", 1500],
    [1538, "A", "Stone Game", 800],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1536, "C", "Diluc and Kaeya", 1500],
    [1535, "E", "Gold Transfer", 2200],
    [1535, "D", "Playoff Tournament", 1800],
    [1535, "C", "Unstable String", 1400],
    [1534, "H", "Lost Nodes", 3500],
    [1534, "G", "A New Beginning", 3300],
    [1534, "F2", "Falling Sand (Hard Version)", 3000],
    [1534, "C", "Little Alawn's Puzzle", 1300],
    [1533, "H", "Submatrices", null],
    [1531, "C", "Симметричный амфитеатр", null],
    [1530, "H", "Turing's Award", 3400],
    [1530, "F", "Bingo", 2600],
    [1528, "E", "Mashtali and Hagh Trees", 2900],
    [1528, "B", "Kavi on Pairing Duty", 1700],
    [1528, "A", "Parsa's Humongous Tree", 1600],
    [1527, "E", "Partition Game", 2500],
    [1526, "C1", "Potions (Easy Version)", 1500],
    [1526, "B", "I Hate 1111", 1400],
    [1525, "F", "Goblins And Gnomes", 2800],
    [1525, "E", "Assimilation IV", 2100],
    [1525, "D", "Armchairs", 1800],
    [1523, "H", "Hopping Around the Array ", 3500],
    [1523, "F", "Favorite Game", 3300],
    [1523, "E", "Crypto Lights", 2600],
    [1523, "D", "Love-Hate", 2400],
    [1521, "E", "Nastia and a Beautiful Matrix", 2700],
    [1521, "D", "Nastia Plays with a Tree", 2500],
    [1519, "F", "Chests and Keys", 3200],
    [1519, "D", "Maximum Sum of Products", 1600],
    [1519, "B", "The Cake Is a Lie", 800],
    [1517, "H", "Fly Around the World", 3500],
    [1517, "F", "Reunion", 3200],
    [1517, "D", "Explorer Space", 1800],
    [1516, "E", "Baby Ehab Plays with Permutations", 2500],
    [1516, "D", "Cut", 2100],
    [1516, "C", "Baby Ehab Partitions Again", 1700],
    [1516, "B", "AGAGA XOOORRR", 1500],
    [1515, "E", "Phoenix and Computers", 2200],
    [1513, "C", "Add One", 1600],
    [1512, "G", "Short Task", 1700],
    [1512, "F", "Education", 1900],
    [1511, "G", "Chips on a Board", 2700],
    [1511, "F", "Chainword", 2700],
    [1511, "E", "Colorings and Dominoes", 2100],
    [1510, "H", "Hard Optimization", 3200],
    [1510, "D", "Digits", 2100],
    [1509, "C", "The Sports Festival", 1800],
    [1506, "G", "Maximize the Remaining String", 2000],
    [1503, "E", "2-Coloring", 3100],
    [1503, "C", "Travelling Salesman Problem", 2200],
    [1501, "B", "Napoleon Cake", 900],
    [1500, "F", "Cupboards Jumps", 3500],
    [1499, "F", "Diameter Cuts", 2400],
    [1499, "E", "Chaotic Merge", 2400],
    [1499, "D", "The Number of Pairs", 2100],
    [1499, "B", "Binary Removals", 1000],
    [1498, "F", "Christmas Game", 2500],
    [1498, "D", "Bananas in a Microwave", 2200],
    [1498, "C", "Planar Reflections", 1600],
    [1497, "E2", "Square-free division (hard version)", 2500],
    [1497, "E1", "Square-free division (easy version)", 1700],
    [1497, "D", "Genius", 2500],
    [1495, "F", "Squares", 3300],
    [1494, "C", "1D Sokoban", 1900],
    [1492, "C", "Maximum width", 1500],
    [1491, "D", "Zookeeper and The Infinite Zoo", 1800],
    [1491, "C", "Pekora and Trampoline", 1700],
    [1488, "E", "Palindromic Doubles", 2200],
    [1487, "G", "String Counting", 2700],
    [1487, "F", "Ones", 2900],
    [1486, "F", "Pairs of Paths", 2600],
    [1486, "E", "Paired Payment", 2200],
    [1486, "D", "Max Median", 2100],
    [1485, "F", "Copy or Prefix Sum", 2400],
    [1485, "E", "Move and Swap", 2500],
    [1485, "B", "Replace and Keep Sorted", 1200],
    [1482, "E", "Skyline Photo", 2100],
    [1481, "F", "AB Tree", 3100],
    [1481, "E", "Sorting Books", 2500],
    [1479, "E", "School Clubs", 3500],
    [1479, "B2", "Painting the Array II", 2100],
    [1479, "B1", "Painting the Array I", 1900],
    [1478, "B", "Nezzar and Lucky Number", 1100],
    [1476, "F", "Lanterns", 3000],
    [1476, "D", "Journey", 1700],
    [1476, "C", "Longest Simple Cycle", 1600],
    [1475, "G", "Strange Beauty", 1900],
    [1475, "D", "Cleaning the Phone", 1800],
    [1475, "B", "New Year's Number", 900],
    [1474, "F", "1 2 3 4 ...", 3000],
    [1474, "D", "Cleaning", 2200],
    [1473, "G", "Tiles", 2800],
    [1473, "D", "Program", 1700],
    [1472, "G", "Moving to the Capital", 2100],
    [1472, "F", "New Year's Puzzle", 2100],
    [1472, "E", "Correct Placement", 1700],
    [1472, "D", "Even-Odd Game", 1200],
    [1472, "C", "Long Jumps", 1100],
    [1472, "B", "Fair Division", 800],
    [1470, "E", "Strange Permutation", 3200],
    [1470, "A", "Strange Birthday Party", 1300],
    [1469, "C", "Building a Fence", 1600],
    [1469, "B", "Red and Blue", 1000],
    [1468, "A", "LaIS", 2200],
    [1467, "E", "Distinctive Roots in a Tree", 2500],
    [1467, "D", "Sum of Paths", 2200],
    [1466, "H", "Finding satisfactory solutions", 3300],
    [1466, "C", "Canine poetry", 1300],
    [1466, "B", "Last minute enhancements", 800],
    [1463, "F", "Max Correct Set", 3100],
    [1462, "B", "Last Year's Substring", 800],
    [1461, "F", "Mathematical Expression", 2700],
    [1461, "C", "Random Events", 1500],
    [1461, "B", "Find the Spruce", 1400],
    [1459, "B", "Move and Turn", 1300],
    [1458, "B", "Glass Half Spilled", 2000],
    [1456, "E", "XOR-ranges", 3500],
    [1455, "G", "Forbidden Value", 2900],
    [1455, "F", "String and Operations", 2800],
    [1455, "D", "Sequence and Swaps", 1600],
    [1453, "F", "Even Harder", 2700],
    [1453, "E", "Dog Snacks", 2300],
    [1452, "E", "Two Editorials", 2500],
    [1452, "D", "Radio Towers", 1600],
    [1451, "C", "String Equality", 1400],
    [1451, "B", "Non-Substring Subsequence", 900],
    [1450, "G", "Communism", 3500],
    [1446, "C", "Xor Tree", 2100],
    [1446, "B", "Catching Cheaters", 1800],
    [1444, "E", "Finding the Vertex", 3500],
    [1444, "D", "Rectangular Polyline", 2900],
    [1443, "B", "Saving the City", 1300],
    [1442, "E", "Black, White and Grey Tree", 3000],
    [1442, "D", "Sum", 2800],
    [1442, "A", "Extreme Subtraction", 1800],
    [1439, "D", "INOI Final Contests", 3100],
    [1437, "F", "Emotional Fishermen", 2600],
    [1437, "E", "Make It Increasing", 2200],
    [1437, "C", "Chef Monocarp", 1800],
    [1433, "F", "Zero Remainder Sum ", 2100],
    [1431, "J", "Zero-XOR Array", 3400],
    [1431, "G", "Number Deletion Game", 2100],
    [1430, "G", "Yet Another DAG Problem", 2600],
    [1430, "F", "Realistic Gameplay", 2600],
    [1428, "G2", "Lucky Numbers (Hard Version)", 3000],
    [1428, "G1", "Lucky Numbers (Easy Version)", 2900],
    [1428, "F", "Fruit Sequences", 2400],
    [1427, "C", "The Hard Work of Paparazzi", 2000],
    [1426, "F", "Number of Subsequences", 2000],
    [1425, "D", "Danger of Mad Snakes", 2300],
    [1425, "B", "Blue and Red of Our Faculty!", 2600],
    [1423, "J", "Bubble Cup hypothesis", 2400],
    [1422, "E", "Minlexes", 2700],
    [1422, "C", "Bargain", 1700],
    [1421, "E", "Swedish Heroes", 2700],
    [1420, "E", "Battle Lemmings", 2500],
    [1420, "C2", "Pokémon Army (hard version)", 2100],
    [1420, "C1", "Pokémon Army (easy version)", 1300],
    [1418, "C", "Mortal Kombat Tower", 1500],
    [1416, "E", "Split", 3200],
    [1416, "C", "XOR Inverse", 2000],
    [1415, "F", "Cakes for Clones", 2900],
    [1415, "C", "Bouncing Ball", 1400],
    [1413, "C", "Perform Easily", 1900],
    [1409, "F", "Subsequences of Length Two", 2100],
    [1409, "E", "Two Platforms", 1800],
    [1408, "I", "Bitwise Magic", 3200],
    [1408, "G", "Clusterization Counting", 2700],
    [1408, "D", "Searchlights", 2000],
    [1408, "C", "Discrete Acceleration", 1500],
    [1407, "E", "Egor in the Republic of Dagestan", 2500],
    [1407, "D", "Discrete Centrifugal Jumps", 2200],
    [1406, "B", "Maximum Product", 1200],
    [1404, "B", "Tree Tag", 1900],
    [1403, "C", "Chess Rush", 3200],
    [1402, "C", "Star Trek", 2600],
    [1401, "D", "Maximum Distributed Tree", 1800],
    [1400, "G", "Mercenaries", 2600],
    [1400, "F", "x-prime Substrings", 2800],
    [1400, "E", "Clear the Multiset", 2200],
    [1399, "F", "Yet Another Segments Subset", 2300],
    [1398, "F", "Controversial Rounds", 2500],
    [1398, "D", "Colored Rectangles", 1800],
    [1398, "C", "Good Subarrays", 1600],
    [1396, "C", "Monster Invaders", 2300],
    [1395, "C", "Boboniu and Bit Operations", 1600],
    [1394, "D", "Boboniu and Jianghu", 2800],
    [1394, "A", "Boboniu Chats with Du", 1800],
    [1393, "E2", "Twilight and Ancient Scroll (harder version)", 3200],
    [1393, "E1", "Twilight and Ancient Scroll (easier version)", 2800],
    [1393, "D", "Rarity and New Dress", 2100],
    [1392, "H", "ZS Shuffles Cards", 3000],
    [1392, "G", "Omkar and Pies", 2900],
    [1392, "D", "Omkar and Bed Wars", 1700],
    [1391, "D", "505", 2000],
    [1391, "C", "Cyclic Permutations ", 1500],
    [1389, "G", "Directing Edges", 2800],
    [1389, "F", "Bicolored Segments", 2600],
    [1389, "C", "Good String", 1500],
    [1389, "B", "Array Walk", 1600],
    [1387, "C", "Viruses", 2900],
    [1387, "B1", "Village (Minimum)", 2100],
    [1387, "A", "Graph", 2100],
    [1385, "D", "a-Good String", 1500],
    [1384, "B2", "Koa and the Beach (Hard Version)", 2200],
    [1384, "B1", "Koa and the Beach (Easy Version)", 1900],
    [1383, "E", "Strange Operation", 2800],
    [1383, "C", "String Transformation 2", 3100],
    [1383, "B", "GameGame", 1900],
    [1382, "B", "Sequential Nim", 1100],
    [1381, "D", "The Majestic Brown Tree Snake", 3000],
    [1381, "B", "Unmerge", 1800],
    [1380, "F", "Strange Addition", 2600],
    [1380, "C", "Create The Teams", 1400],
    [1379, "E", "Inverse Genealogy", 2800],
    [1379, "C", "Choosing flowers", 2000],
    [1373, "E", "Sum of Digits", 2200],
    [1373, "D", "Maximum Sum on Even Positions", 1600],
    [1372, "E", "Omkar and Last Floor", 2900],
    [1372, "D", "Omkar and Circle", 2100],
    [1371, "E2", "Asterism (Hard Version)", 2300],
    [1370, "D", "Odd-Even Subsequence", 2000],
    [1369, "F", "BareLee", 2700],
    [1369, "D", "TediousLee", 1900],
    [1368, "H1", "Breadboard Capacity (easy version)", 3300],
    [1367, "F2", "Flying Sort (Hard Version)", 2400],
    [1367, "F1", "Flying Sort (Easy Version)", 2100],
    [1367, "E", "Necklace Assembly", 1900],
    [1366, "G", "Construct the String", 2700],
    [1366, "F", "Jog Around The Graph", 2700],
    [1366, "E", "Two Arrays", 2100],
    [1363, "F", "Rotating Substrings", 2600],
    [1363, "E", "Tree Shuffling", 2000],
    [1360, "F", "Spy-string", 1700],
    [1360, "E", "Polygon", 1300],
    [1359, "D", "Yet Another Yet Another Task", 2000],
    [1359, "B", "New Theatre Square", 1000],
    [1355, "B", "Young Explorers", 1200],
    [1354, "F", "Summoning Minions", 2500],
    [1354, "E", "Graph Coloring", 2100],
    [1354, "B", "Ternary String", 1200],
    [1353, "F", "Decreasing Heights", 2200],
    [1353, "E", "K-periodic Garland", 1900],
    [1350, "B", "Orac and Models", 1400],
    [1349, "F2", "Slime and Sequences (Hard Version)", 3500],
    [1349, "F1", "Slime and Sequences (Easy Version)", 3100],
    [1349, "E", "Slime and Hats", 3500],
    [1348, "E", "Phoenix and Berries", 2400],
    [1346, "I", "Pac-Man 2.0", 2900],
    [1346, "E", "Magic Tricks", 1700],
    [1345, "B", "Card Constructions", 1100],
    [1344, "C", "Quantifier Question", 2600],
    [1343, "C", "Alternating Subsequence", 1200],
    [1342, "F", "Make It Ascending", 3000],
    [1340, "C", "Nastya and Unexpected Guest", 2400],
    [1340, "B", "Nastya and Scoreboard", 1700],
    [1339, "A", "Filling Diamonds", 900],
    [1338, "D", "Nested Rubber Bands", 2700],
    [1336, "C", "Kaavi and Magic Spell", 2200],
    [1336, "A", "Linova and Kingdom", 1600],
    [1335, "E2", "Three Blocks Palindrome (hard version)", 1800],
    [1335, "E1", "Three Blocks Palindrome (easy version)", 1700],
    [1334, "F", "Strange Function", 2500],
    [1332, "F", "Independent Set", 2500],
    [1331, "F", "Elementary!", null]
];
let stringq = [
    [1560, "E", "Polycarp and String Transformation", 1800],
    [1560, "D", "Make a Power of Two", 1300],
    [1555, "D", "Say No to Palindromes", 1600],
    [1554, "D", "Diane", 1800],
    [1553, "D", "Backspace", 1500],
    [1553, "B", "Reverse String", 1300],
    [1552, "A", "Subsequence Permutation", 800],
    [1551, "C", "Interesting Story", 1500],
    [1551, "B1", "Wonderful Coloring - 1", 800],
    [1550, "E", "Stringforces", 2500],
    [1547, "B", "Alphabetical Strings", 800],
    [1539, "B", "Love Song", 800],
    [1538, "E", "Funny Substrings", 2100],
    [1537, "E2", "Erase and Extend (Hard Version)", 2200],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1536, "B", "Prinzessin der Verurteilung", 1200],
    [1535, "F", "String Distance", 3000],
    [1535, "C", "Unstable String", 1400],
    [1532, "F", "Prefixes and Suffixes", null],
    [1530, "E", "Minimax", 2100],
    [1526, "D", "Kill Anton", 2200],
    [1512, "C", "A-B Palindrome", 1200],
    [1511, "F", "Chainword", 2700],
    [1511, "D", "Min Cost String", 1600],
    [1508, "A", "Binary Literature", 1900],
    [1506, "G", "Maximize the Remaining String", 2000],
    [1506, "C", "Double-ended Strings", 1000],
    [1504, "A", " Déjà Vu", 800],
    [1499, "E", "Chaotic Merge", 2400],
    [1496, "A", "Split it!", 900],
    [1493, "E", "Enormous XOR", 2600],
    [1493, "C", "K-beautiful Strings", 2000],
    [1481, "A", "Space Navigation ", 800],
    [1480, "A", "Yet Another String Game", 800],
    [1476, "E", "Pattern Matching", 2300],
    [1473, "D", "Program", 1700],
    [1473, "B", "String LCM", 1000],
    [1469, "E", "A Bit Similar", 2400],
    [1466, "G", "Song of the Sirens", 2600],
    [1466, "C", "Canine poetry", 1300],
    [1462, "B", "Last Year's Substring", 800],
    [1451, "C", "String Equality", 1400],
    [1451, "B", "Non-Substring Subsequence", 900],
    [1446, "B", "Catching Cheaters", 1800],
    [1437, "G", "Death DBMS", 2600],
    [1431, "I", "Cyclic Shifts", 2900],
    [1430, "E", "String Reversal", 1900],
    [1428, "C", "ABBB", 1100],
    [1426, "F", "Number of Subsequences", 2000],
    [1422, "E", "Minlexes", 2700],
    [1421, "C", "Palindromifier", 1400],
    [1416, "C", "XOR Inverse", 2000],
    [1411, "E", "Poman Numbers", 2300],
    [1411, "D", "Grime Zoo", 2100],
    [1409, "F", "Subsequences of Length Two", 2100],
    [1404, "A", "Balanced Bitstring", 1500],
    [1400, "F", "x-prime Substrings", 2800],
    [1400, "A", "String Similarity", 800],
    [1397, "A", "Juggling Letters", 800],
    [1394, "E", "Boboniu and Banknote Collection", 3500],
    [1393, "E2", "Twilight and Ancient Scroll (harder version)", 3200],
    [1393, "E1", "Twilight and Ancient Scroll (easier version)", 2800],
    [1384, "A", "Common Prefixes", 1200],
    [1383, "A", "String Transformation 1", 1700],
    [1381, "A2", "Prefix Flip (Hard Version)", 1700],
    [1381, "A1", "Prefix Flip (Easy Version)", 1300],
    [1379, "A", "Acacius and String", 1500],
    [1374, "C", "Move Brackets", 1000],
    [1369, "B", "AccurateLee", 1200],
    [1368, "B", "Codeforces Subsequences", 1500],
    [1367, "A", "Short Substrings", 800],
    [1366, "G", "Construct the String", 2700],
    [1363, "F", "Rotating Substrings", 2600],
    [1363, "B", "Subsequence Hate", 1400],
    [1360, "F", "Spy-string", 1700],
    [1348, "C", "Phoenix and Distribution", 1600],
    [1342, "B", "Binary Period", 1100],
    [1336, "C", "Kaavi and Magic Spell", 2200],
    [1332, "C", "K-Complete Word", 1500],
    [1331, "F", "Elementary!", null],
    [1326, "D2", "Prefix-Suffix Palindrome (Hard version)", 1800],
    [1326, "D1", "Prefix-Suffix Palindrome (Easy version)", 1500],
    [1324, "B", "Yet Another Palindrome Problem", 1100],
    [1321, "C", "Remove Adjacent", 1600],
    [1320, "D", "Reachable Strings", 2500],
    [1316, "B", "String Modification", 1400],
    [1315, "B", "Homecoming", 1300],
    [1313, "E", "Concatenation with intersection", 2700],
    [1310, "C", "Au Pont Rouge", 2800],
    [1307, "C", "Cow and Message", 1500],
    [1305, "B", "Kuroni and Simple Strings", 1200],
    [1304, "B", "Longest Palindrome", 1100],
    [1303, "E", "Erase Subsequences", 2200],
    [1303, "A", "Erasing Zeroes", 800],
    [1301, "C", "Ayoub's function", 1700],
    [1301, "A", "Three Strings", 800],
    [1297, "H", "Paint the String", null],
    [1295, "C", "Obtain The String", 1600],
    [1295, "B", "Infinite Prefixes", 1700],
    [1291, "A", "Even But Not Even", 900],
    [1290, "B", "Irreducible Anagrams", 1800],
    [1286, "E", "Fedya the Potter Strikes Back", 3200],
    [1285, "D", "Dr. Evil Underscores", 1900],
    [1284, "A", "New Year and Naming", 800],
    [1282, "D", "Enchanted Artifact", 2300],
    [1278, "A", "Shuffle Hashing", 1000],
    [1272, "F", "Two Bracket Sequences", 2200],
    [1270, "F", "Awesome Substrings", 2600],
    [1268, "A", "Long Beautiful Integer", 1700],
    [1267, "L", "Lexicography", 1800],
    [1257, "C", "Dominated Subarray", 1200],
    [1256, "F", "Equalizing Two Strings", 2000],
    [1252, "D", "Find String in a Grid", 3000],
    [1251, "B", "Binary Palindromes", 1400],
    [1251, "A", "Broken Keyboard", 1000],
    [1243, "B2", "Character Swap (Hard Version)", 1600],
    [1243, "B1", "Character Swap (Easy Version)", 1000],
    [1238, "D", "AB-string", 1900],
    [1231, "E", "Middle-Out", 2200],
    [1223, "B", "Strings Equalization", 1000],
    [1220, "C", "Substring Game in the Lesson", 1300],
    [1220, "A", "Cards", 800],
    [1219, "C", "Periodic integer number", 1700],
    [1216, "A", "Prefixes", 800],
    [1213, "F", "Unstable String Sort", 2100],
    [1211, "F", "kotlinkotlinkotlinkotlin...", 2300],
    [1209, "F", "Koala and Notebook", 2600],
    [1207, "G", "Indie Album", 2700],
    [1205, "E", "Expected Value Again", 3100],
    [1204, "D2", "Kirk and a Binary String (hard version)", 2100],
    [1204, "D1", "Kirk and a Binary String (easy version)", 2000],
    [1202, "E", "You Are Given Some Strings...", 2400],
    [1202, "D", "Print a 1337-string...", 1900],
    [1202, "C", "You Are Given a WASD-string...", 2100],
    [1201, "A", "Important Exam", 900],
    [1200, "E", "Compress Words", 2000],
    [1194, "C", "From S To T", 1300],
    [1189, "A", "Keanu Reeves", 800],
    [1187, "B", "Letters Shop", 1300],
    [1185, "B", "Email from Polycarp", 1200],
    [1183, "H", "Subsequences (hard version)", 1900],
    [1182, "C", "Beautiful Lyrics", 1700],
    [1182, "B", "Plus from Picture", 1300],
    [1181, "B", "Split a Number", 1500],
    [1178, "E", "Archaeology", 1900],
    [1178, "B", "WOW Factor", 1300],
    [1170, "C", "Minus and Minus Give Plus", null],
    [1167, "A", "Telephone Number", 800],
    [1163, "D", "Mysterious Code", 2100],
    [1158, "B", "The minimal unique substring", 2200],
    [1156, "B", "Ugly Pairs", 1800],
    [1155, "A", "Reverse a Substring", 1000],
    [1153, "C", "Serval and Parenthesis Sequence", 1700],
    [1151, "A", "Maxim and Biology", 1000],
    [1149, "B", "Three Religions", 2200],
    [1147, "B", "Chladni Figure", 1900],
    [1146, "B", "Hate \"A\"", 1100],
    [1146, "A", "Love \"A\"", 800],
    [1144, "E", "Median String", 1900],
    [1144, "A", "Diverse Strings", 800],
    [1140, "B", "Good String", 1200],
    [1139, "A", "Even Substrings", 800],
    [1138, "B", "Circus", 1800],
    [1137, "B", "Camp Schedule", 1600],
    [1131, "E", "String Multiplication", 2300],
    [1129, "C", "Morse Code", 2400],
    [1120, "C", "Compress String", 2100],
    [1111, "A", "Superhero Transformation", 1000],
    [1110, "H", "Modest Substrings", 3500],
    [1109, "B", "Sasha and One More Name", 1800],
    [1107, "A", "Digits Sequence Dividing", 900],
    [1105, "B", "Zuhair and Strings", 1100],
    [1102, "D", "Balanced Ternary String", 1500],
    [1098, "F", "Ж-function", 3500],
    [1097, "H", "Mateusz and an Infinite Sequence", 3400],
    [1096, "B", "Substring Removal", 1300],
    [1093, "B", "Letters Rearranging", 900],
    [1092, "C", "Prefixes and Suffixes", 1700],
    [1090, "J", "Two Prefixes", 2600],
    [1085, "E", "Vasya and Templates", 2300],
    [1085, "A", "Right-Left Cipher", 800],
    [1083, "B", "The Fair Nut and Strings", 2000],
    [1082, "F", "Speed Dial", 2800],
    [1081, "H", "Palindromic Magic", 3500],
    [1080, "E", "Sonya and Matrix Beauty", 2400],
    [1076, "A", "Minimizing the String", 1200],
    [1073, "A", "Diverse Substring", 1000],
    [1065, "G", "Fibonacci Suffix", 2700],
    [1065, "E", "Side Transmutations", 2300],
    [1063, "A", "Oh Those Palindromes", 1300],
    [1056, "H", "Detect Robots", 3200],
    [1056, "E", "Check Transcription", 2100],
    [1055, "F", "Tree and XOR", 2900],
    [1055, "D", "Refactoring", 2400],
    [1051, "E", "Vasya and Big Integers", 2600],
    [1051, "A", "Vasya And Password", 1200],
    [1045, "J", "Moonwalk challenge", 2600],
    [1045, "I", "Palindrome Pairs", 1600],
    [1043, "G", "Speckled Band", 3500],
    [1038, "F", "Wrap Around", 2900],
    [1038, "A", "Equality", 800],
    [1037, "C", "Equalize", 1300],
    [1029, "A", "Many Equal Substrings", 1300],
    [1027, "A", "Palindromic Twist", 1000],
    [1023, "A", "Single Wildcard Pattern Matching", 1200],
    [1017, "E", "The Supersonic Rocket", 2400],
    [1015, "F", "Bracket Substring", 2300],
    [1012, "D", "AB-Strings", 2800],
    [1008, "A", "Romaji", 900],
    [1005, "B", "Delete from the Left", 900],
    [1003, "F", "Abbreviation", 2200],
    [989, "B", "A Tide of Riverscape", 1200],
    [989, "A", "A Blend of Springtime", 900],
    [988, "B", "Substrings Sort", 1100],
    [985, "F", "Isomorphic Strings", 2300],
    [981, "A", "Antipalindrome", 900],
    [979, "D", "Kuro and GCD and XOR and SUM", 2200],
    [978, "B", "File Name", 800],
    [977, "B", "Two-gram", 900],
    [975, "A", "Aramic script", 900],
    [965, "E", "Short Code", 2200],
    [963, "D", "Frequency of String", 2500],
    [958, "A2", "Death Stars (medium)", 2000],
    [955, "D", "Scissors", 2600],
    [954, "B", "String Typing", 1400],
    [946, "C", "String Transformation", 1300],
    [940, "C", "Phone Numbers", 1500],
    [939, "D", "Love Rescue", 1600],
    [936, "C", "Lock Puzzle", 2300],
    [932, "G", "Palindrome Partition", 2900],
    [930, "B", "Game with String", 1600],
    [928, "D", "Autocompletion", 1900],
    [928, "A", "Login Verification", 1200],
    [923, "D", "Picking Strings", 2500],
    [923, "C", "Perfect Security", 1800],
    [918, "B", "Radio Station", 900],
    [917, "E", "Upside Down", 3400],
    [914, "F", "Substrings in a String", 3000],
    [906, "E", "Reverses", 3300],
    [906, "A", "Shockers", 1600],
    [903, "E", "Swapping Characters", 2200],
    [900, "E", "Maximum Questions", 2100],
    [899, "F", "Letters Removing", 2100],
    [898, "C", "Phone Numbers", 1400],
    [895, "D", "String Mark", 2100],
    [883, "H", "Palindromic Cut", 1800],
    [883, "E", "Field of Wonders", 1500],
    [877, "A", "Alex and broken contest", 1100],
    [873, "F", "Forbidden Indices", 2400],
    [868, "D", "Huge Strings", 2200],
    [868, "A", "Bark to Unlock", 900],
    [864, "B", "Polycarp and Letters", 1000],
    [862, "F", "Mahmoud and Ehab and the final stage", 2900],
    [856, "B", "Similar Words", 2300],
    [855, "A", "Tom Riddle's Diary", 800],
    [844, "A", "Diversity", 1000],
    [835, "D", "Palindromic characteristics", 1900],
    [832, "B", "Petya and Exam", 1600],
    [831, "B", "Keyboard Layouts", 800],
    [827, "E", "Rusty String", 2700],
    [827, "C", "DNA Evolution", 2100],
    [827, "A", "String Reconstruction", 1700],
    [825, "F", "String Compression", 2400],
    [822, "B", "Crossword solving", 1000],
    [814, "C", "An impassioned circulation of affection", 1600],
    [808, "G", "Anthem of Berland", 2300],
    [802, "H", "Fake News (medium)", 2200],
    [802, "G", "Fake News (easy)", 800],
    [801, "B", "Valued Keys", 900],
    [798, "B", "Mike and strings", 1300],
    [798, "A", "Mike and palindrome", 1000],
    [797, "C", "Minimal string", 1700],
    [786, "D", "Rap God", 3400],
    [785, "A", "Anton and Polyhedrons", 800],
    [780, "D", "Innokenty and a Football League", 1900],
    [778, "C", "Peterson Polyglot", 2500],
    [778, "A", "String Game", 1700],
    [777, "D", "Cloud of Hashtags", 1800],
    [776, "A", "A Serial Killer", 900],
    [774, "K", "Stepan and Vowels", 1600],
    [766, "C", "Mahmoud and a Message", 1700],
    [766, "A", "Mahmoud and Longest Uncommon Subsequence", 1000],
    [765, "B", "Code obfuscation", 1100],
    [762, "C", "Two strings", 2100],
    [758, "D", "Ability To Convert", 2000],
    [757, "C", "Felicity is Coming!", 1900],
    [755, "B", "PolandBall and Game", 1100],
    [754, "E", "Dasha and cyclic table", 2600],
    [754, "C", "Vladik and chat", 2200],
    [748, "B", "Santa Claus and Keyboard Check", 1500],
    [747, "E", "Comments", 1700],
    [747, "B", "Mammoth's Genome Decoding", 900],
    [746, "B", "Decoding", 900],
    [745, "A", "Hongcow Learns the Cyclic Shift", 900],
    [744, "E", "Hongcow Masters the Cyclic Shift", 3200],
    [735, "A", "Ostap and Grasshopper", 800],
    [734, "A", "Anton and Danik", 800],
    [731, "A", "Night at the Museum", 800],
    [729, "A", "Interview with Oleg", 900],
    [727, "E", "Games on a CD", 2300],
    [727, "B", "Bill Total Value", 1600]
];
let greedyq = [
    [1560, "F2", "Nearest Beautiful Number (hard version)", 2100],
    [1560, "F1", "Nearest Beautiful Number (easy version)", 1900],
    [1560, "D", "Make a Power of Two", 1300],
    [1559, "D2", "Mocha and Diana (Hard Version)", 2500],
    [1559, "D1", "Mocha and Diana (Easy Version)", 1400],
    [1559, "B", "Mocha and Red and Blue", 900],
    [1557, "D", "Ezzat and Grid", 2200],
    [1557, "B", "Moamen and k-subarrays", 1100],
    [1554, "D", "Diane", 1800],
    [1554, "C", "Mikasa", 1800],
    [1554, "B", "Cobb", 1700],
    [1554, "A", "Cherry", 800],
    [1553, "D", "Backspace", 1500],
    [1553, "C", "Penalty", 1200],
    [1552, "E", "Colors and Intervals", 2300],
    [1552, "C", "Maximize the Intersections", 1800],
    [1552, "B", "Running for Gold", 1500],
    [1551, "C", "Interesting Story", 1500],
    [1551, "B2", "Wonderful Coloring - 2", 1400],
    [1551, "B1", "Wonderful Coloring - 1", 800],
    [1551, "A", "Polycarp and Coins", 800],
    [1550, "C", "Manhattan Subarrays", 1700],
    [1550, "B", "Maximum Cost Deletion", 1000],
    [1550, "A", "Find The Array", 800],
    [1549, "B", "Gregor and the Pawn Game", 800],
    [1548, "E", "Gregor and the Two Painters", 3400],
    [1548, "A", "Web of Lies", 1400],
    [1547, "D", "Co-growing Sequence", 1300],
    [1547, "C", "Pair Programming", 1100],
    [1547, "B", "Alphabetical Strings", 800],
    [1546, "A", "AquaMoon and Two Arrays", 800],
    [1543, "E", "The Final Pursuit", 2700],
    [1543, "B", "Customising the Track", 900],
    [1543, "A", "Exciting Bets", 900],
    [1541, "A", "Pretty Permutations", 800],
    [1540, "A", "Great Graphs", 1400],
    [1539, "F", "Strange Array", 2600],
    [1539, "E", "Game with Cards", 2500],
    [1539, "D", "PriceFixed", 1600],
    [1539, "C", "Stable Groups", 1200],
    [1539, "A", "Contest Start", 1000],
    [1538, "G", "Gift Set", 2100],
    [1538, "B", "Friends and Candies", 800],
    [1538, "A", "Stone Game", 800],
    [1537, "F", "Figure Fixing", 2200],
    [1537, "E2", "Erase and Extend (Hard Version)", 2200],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1537, "C", "Challenging Cliffs", 1200],
    [1537, "B", "Bad Boy", 900],
    [1537, "A", "Arithmetic Array", 800],
    [1536, "D", "Omkar and Medians", 2000],
    [1535, "E", "Gold Transfer", 2200],
    [1535, "C", "Unstable String", 1400],
    [1535, "B", "Array Reodering", 900],
    [1534, "F2", "Falling Sand (Hard Version)", 3000],
    [1534, "F1", "Falling Sand (Easy Version)", 2500],
    [1534, "E", "Lost Array", 2300],
    [1534, "B", "Histogram Ugliness", 1100],
    [1533, "F", "Binary String Partition", null],
    [1533, "E", "Chess Team Forming", null],
    [1530, "E", "Minimax", 2100],
    [1530, "D", "Secret Santa", 1600],
    [1530, "C", "Pursuit", 1200],
    [1530, "A", "Binary Decimal", 800],
    [1529, "B", "Sifid and Strange Subsequences", 1100],
    [1529, "A", "Eshag Loves Big Arrays", 800],
    [1528, "C", "Trees of Tranquillity", 2300],
    [1528, "A", "Parsa's Humongous Tree", 1600],
    [1526, "C2", "Potions (Hard Version)", 1600],
    [1526, "C1", "Potions (Easy Version)", 1500],
    [1525, "D", "Armchairs", 1800],
    [1525, "C", "Robot Collisions", 2000],
    [1525, "B", "Permutation Sort", 900],
    [1523, "C", "Compression and Expansion", 1600],
    [1521, "E", "Nastia and a Beautiful Matrix", 2700],
    [1521, "D", "Nastia Plays with a Tree", 2500],
    [1520, "G", "To Go Or Not To Go?", 2200],
    [1520, "E", "Arranging The Sheep", 1400],
    [1519, "C", "Berland Regional", 1400],
    [1517, "C", "Fillomino 2", 1400],
    [1517, "B", "Morning Jogging", 1200],
    [1517, "A", "Sum of 2050", 800],
    [1516, "B", "AGAGA XOOORRR", 1500],
    [1516, "A", "Tit for Tat", 800],
    [1515, "F", "Phoenix and Earthquake", 2600],
    [1515, "D", "Phoenix and Socks", 1500],
    [1515, "C", "Phoenix and Towers", 1400],
    [1515, "A", "Phoenix and Gold", 800],
    [1514, "D", "Cut and Stick", 2000],
    [1514, "C", "Product 1 Modulo N", 1600],
    [1513, "D", "GCD and MST", 2000],
    [1512, "F", "Education", 1900],
    [1512, "E", "Permutation by Sum", 1600],
    [1512, "D", "Corrupted Array", 1200],
    [1511, "E", "Colorings and Dominoes", 2100],
    [1511, "D", "Min Cost String", 1600],
    [1511, "A", "Review Site", 800],
    [1510, "I", "Is It Rated?", 2700],
    [1509, "C", "The Sports Festival", 1800],
    [1509, "B", "TMT Document", 1100],
    [1508, "C", "Complete the MST", 2500],
    [1508, "A", "Binary Literature", 1900],
    [1506, "G", "Maximize the Remaining String", 2000],
    [1506, "D", "Epic Transformation", 1400],
    [1506, "B", "Partial Replacement", 1100],
    [1505, "E", "Cakewalk", 1800],
    [1504, "B", "Flip the Bits", 1200],
    [1503, "D", "Flip the Cards", 2600],
    [1503, "C", "Travelling Salesman Problem", 2200],
    [1503, "A", "Balance the Bits", 1600],
    [1500, "C", "Matrix Sorting", 2600],
    [1499, "C", "Minimum Grid Path", 1500],
    [1499, "B", "Binary Removals", 1000],
    [1498, "E", "Two Houses", 2200],
    [1498, "B", "Box Fitting", 1300],
    [1497, "E2", "Square-free division (hard version)", 2500],
    [1497, "E1", "Square-free division (easy version)", 1700],
    [1497, "B", "M-arrays", 1200],
    [1497, "A", "Meximization", 800],
    [1496, "A", "Split it!", 900],
    [1495, "E", "Qingshan and Daniel", 3200],
    [1495, "B", "Let's Go Hiking", 1900],
    [1495, "A", "Diamond Miner", 1200],
    [1494, "D", "Dogeforces", 2300],
    [1494, "C", "1D Sokoban", 1900],
    [1494, "B", "Berland Crossword", 1400],
    [1493, "E", "Enormous XOR", 2600],
    [1493, "C", "K-beautiful Strings", 2000],
    [1493, "A", "Anti-knapsack", 800],
    [1492, "E", "Almost Fault-Tolerant Database", 2500],
    [1492, "D", "Genius's Gambit", 1900],
    [1492, "C", "Maximum width", 1500],
    [1492, "B", "Card Deck", 1100],
    [1491, "D", "Zookeeper and The Infinite Zoo", 1800],
    [1491, "C", "Pekora and Trampoline", 1700],
    [1491, "A", "K-th Largest Value", 800],
    [1490, "F", "Equalize the Array", 1500],
    [1490, "E", "Accidental Victory", 1400],
    [1490, "A", "Dense Array", 800],
    [1488, "G", "Painting Numbers", 2500],
    [1488, "D", "Problemsolving Marathon", 1900],
    [1488, "B", "RBS Deletion", 1800],
    [1487, "F", "Ones", 2900],
    [1487, "E", "Cheap Dinner", 2000],
    [1487, "C", "Minimum Ties", 1500],
    [1486, "A", "Shifting Stacks", 900],
    [1485, "E", "Move and Swap", 2500],
    [1485, "A", "Add and Divide", 1000],
    [1482, "C", "Basic Diplomacy", 1600],
    [1481, "F", "AB Tree", 3100],
    [1481, "E", "Sorting Books", 2500],
    [1481, "D", "AB Graph", 2000],
    [1481, "C", "Fence Painting", 1600],
    [1481, "B", "New Colony", 1100],
    [1481, "A", "Space Navigation ", 800],
    [1480, "B", "The Great Hero", 900],
    [1480, "A", "Yet Another String Game", 800],
    [1479, "B2", "Painting the Array II", 2100],
    [1479, "B1", "Painting the Array I", 1900],
    [1478, "B", "Nezzar and Lucky Number", 1100],
    [1478, "A", "Nezzar and Colorful Balls", 800],
    [1477, "E", "Nezzar and Tournaments", 3300],
    [1477, "C", "Nezzar and Nice Beatmap", 2200],
    [1477, "B", "Nezzar and Binary String", 1900],
    [1476, "C", "Longest Simple Cycle", 1600],
    [1476, "B", "Inflation", 1300],
    [1476, "A", "K-divisible Sum", 1000],
    [1474, "E", "What Is It?", 2500],
    [1474, "D", "Cleaning", 2200],
    [1474, "C", "Array Destruction", 1700],
    [1474, "B", "Different Divisors", 1000],
    [1474, "A", "Puzzle From the Future", 800],
    [1473, "A", "Replacing Elements", 800],
    [1472, "F", "New Year's Puzzle", 2100],
    [1472, "D", "Even-Odd Game", 1200],
    [1472, "B", "Fair Division", 800],
    [1472, "A", "Cards for Friends", 800],
    [1471, "B", "Strange List", 1100],
    [1471, "A", "Strange Partition", 900],
    [1470, "D", "Strange Housing", 2200],
    [1470, "A", "Strange Birthday Party", 1300],
    [1469, "F", "Power Sockets", 2600],
    [1469, "C", "Building a Fence", 1600],
    [1469, "B", "Red and Blue", 1000],
    [1469, "A", "Regular Bracket Sequence", 1000],
    [1468, "N", "Waste Sorting", 900],
    [1468, "L", "Prime Divisors Selection", 2700],
    [1468, "J", "Road Reform", 1800],
    [1468, "H", "K and Medians", 2200],
    [1468, "E", "Four Segments", 800],
    [1468, "A", "LaIS", 2200],
    [1467, "C", "Three Bags", 1900],
    [1467, "A", "Wizard of Orz", 900],
    [1466, "H", "Finding satisfactory solutions", 3300],
    [1466, "F", "Euclid's nightmare", 2100],
    [1466, "D", "13th Labour of Heracles", 1500],
    [1466, "C", "Canine poetry", 1300],
    [1466, "B", "Last minute enhancements", 800],
    [1463, "D", "Pairs", 1900],
    [1463, "B", "Find The Array", 1400],
    [1462, "F", "The Treasure of The Segments", 1800],
    [1462, "D", "Add to Neighbour and Remove", 1400],
    [1462, "C", "Unique Number", 900],
    [1461, "F", "Mathematical Expression", 2700],
    [1461, "E", "Water Level", 2200],
    [1461, "A", "String Generation", 800],
    [1458, "D", "Flip and Reverse", 3100],
    [1456, "E", "XOR-ranges", 3500],
    [1455, "F", "String and Operations", 2800],
    [1455, "E", "Four Points", 2400],
    [1455, "D", "Sequence and Swaps", 1600],
    [1454, "F", "Array Partition", 2100],
    [1454, "C", "Sequence Transformation", 1200],
    [1453, "E", "Dog Snacks", 2300],
    [1453, "D", "Checkpoints", 1900],
    [1453, "C", "Triangles", 1700],
    [1452, "G", "Game On Tree", 2700],
    [1452, "F", "Divide Powers", 2900],
    [1452, "E", "Two Editorials", 2500],
    [1452, "C", "Two Brackets", 800],
    [1452, "B", "Toy Blocks", 1400],
    [1451, "C", "String Equality", 1400],
    [1451, "B", "Non-Substring Subsequence", 900],
    [1451, "A", "Subtract or Divide", 800],
    [1450, "F", "The Struggling Contestant", 2400],
    [1450, "D", "Rating Compression", 1800],
    [1450, "B", "Balls of Steel", 1000],
    [1447, "B", "Numbers Box", 1000],
    [1446, "D2", "Frequency Problem (Hard Version)", 3000],
    [1446, "D1", "Frequency Problem (Easy Version)", 2600],
    [1446, "A", "Knapsack", 1300],
    [1445, "B", "Elimination", 900],
    [1445, "A", "Array Rearrangment", 800],
    [1443, "C", "The Delivery Dilemma", 1400],
    [1443, "B", "Saving the City", 1300],
    [1442, "E", "Black, White and Grey Tree", 3000],
    [1442, "D", "Sum", 2800],
    [1442, "C", "Graph Transpositions", 2400],
    [1442, "B", "Identify the Operations", 1800],
    [1442, "A", "Extreme Subtraction", 1800],
    [1440, "B", "Sum of Medians", 900],
    [1439, "C", "Greedy Shopping", 2600],
    [1439, "A2", "Binary Table (Hard Version)", 1900],
    [1438, "B", "Valerii Against Everyone", 1000],
    [1437, "D", "Minimal Height Tree", 1600],
    [1437, "C", "Chef Monocarp", 1800],
    [1437, "B", "Reverse Binary Strings", 1200],
    [1437, "A", "Marketing Scheme", 800],
    [1436, "D", "Bandit in a City", 1900],
    [1433, "C", "Dominant Piranha", 900],
    [1433, "B", "Yet Another Bookshelf", 800],
    [1431, "H", "Rogue-like Game", 2600],
    [1431, "G", "Number Deletion Game", 2100],
    [1431, "F", "Neural Network Problem", 2100],
    [1431, "D", "Used Markers", 1500],
    [1430, "F", "Realistic Gameplay", 2600],
    [1430, "E", "String Reversal", 1900],
    [1430, "D", "String Deletion", 1700],
    [1430, "C", "Numbers on Whiteboard", 1000],
    [1430, "B", "Barrels", 800],
    [1428, "G2", "Lucky Numbers (Hard Version)", 3000],
    [1428, "G1", "Lucky Numbers (Easy Version)", 2900],
    [1428, "E", "Carrots for Rabbits", 2200],
    [1428, "D", "Bouncing Boomerangs", 1900],
    [1428, "C", "ABBB", 1100],
    [1427, "F", "Boring Card Game", 3200],
    [1427, "B", "Chess Cheater", 1400],
    [1426, "E", "Rock, Paper, Scissors", 1800],
    [1426, "D", "Non-zero Segments", 1500],
    [1425, "E", "Excitation of Atoms", 2200],
    [1425, "A", "Arena of Greed", 1400],
    [1422, "E", "Minlexes", 2700],
    [1422, "B", "Nice Matrix", 1300],
    [1421, "D", "Hexagons", 1900],
    [1421, "A", "XORwice", 800],
    [1420, "E", "Battle Lemmings", 2500],
    [1420, "C2", "Pokémon Army (hard version)", 2100],
    [1420, "C1", "Pokémon Army (easy version)", 1300],
    [1419, "D2", "Sage's Birthday (hard version)", 1500],
    [1419, "D1", "Sage's Birthday (easy version)", 1000],
    [1419, "C", "Killjoy", 1500],
    [1419, "B", "Stairs", 1200],
    [1419, "A", "Digit Game", 900],
    [1418, "C", "Mortal Kombat Tower", 1500],
    [1418, "B", "Negative Prefixes", 1300],
    [1417, "B", "Two Arrays", 1100],
    [1417, "A", "Copy-paste", 800],
    [1416, "F", "Showing Off", 3300],
    [1416, "E", "Split", 3200],
    [1416, "C", "XOR Inverse", 2000],
    [1416, "B", "Make Them Equal", 2000],
    [1415, "E", "New Game Plus!", 2200],
    [1415, "B", "Repainting Street", 1100],
    [1413, "E", "Solo mid Oracle", 2100],
    [1413, "D", "Shurikens", 1700],
    [1411, "F", "The Thorny Path", 3000],
    [1411, "E", "Poman Numbers", 2300],
    [1411, "D", "Grime Zoo", 2100],
    [1409, "D", "Decrease the Sum of Digits", 1500],
    [1409, "B", "Minimum Product", 1100],
    [1409, "A", "Yet Another Two Integers Problem", 800]
];
let graphq = [
    [1559, "D2", "Mocha and Diana (Hard Version)", 2500],
    [1559, "D1", "Mocha and Diana (Easy Version)", 1400],
    [1559, "C", "Mocha and Hiking", 1200],
    [1555, "F", "Good Graph", 2700],
    [1553, "G", "Common Divisor Graph", 2700],
    [1553, "E", "Permutation Shift", 2100],
    [1552, "D", "Array Differentiation", 1800],
    [1552, "B", "Running for Gold", 1500],
    [1550, "F", "Jumping Around", 2700],
    [1549, "B", "Gregor and the Pawn Game", 800],
    [1548, "E", "Gregor and the Two Painters", 3400],
    [1548, "A", "Web of Lies", 1400],
    [1547, "G", "How Many Paths?", 2100],
    [1545, "C", "AquaMoon and Permutations", 2800],
    [1543, "E", "The Final Pursuit", 2700],
    [1540, "B", "Tree Array", 2300],
    [1540, "A", "Great Graphs", 1400],
    [1537, "F", "Figure Fixing", 2200],
    [1536, "E", "Omkar and Forest", 2300],
    [1534, "H", "Lost Nodes", 3500],
    [1534, "F2", "Falling Sand (Hard Version)", 3000],
    [1534, "F1", "Falling Sand (Easy Version)", 2500],
    [1534, "E", "Lost Array", 2300],
    [1534, "C", "Little Alawn's Puzzle", 1300],
    [1533, "I", "Excursions", null],
    [1533, "G", "Biome Map", null],
    [1530, "D", "Secret Santa", 1600],
    [1528, "D", "It's a bird! No, it's a plane! No, it's AaParsa!", 2500],
    [1520, "G", "To Go Or Not To Go?", 2200],
    [1519, "E", "Off by One", 2700],
    [1517, "G", "Starry Night Camping", 3300],
    [1517, "D", "Explorer Space", 1800],
    [1516, "D", "Cut", 2100],
    [1515, "G", "Phoenix and Odometers", 2700],
    [1515, "F", "Phoenix and Earthquake", 2600],
    [1514, "E", "Baby Ehab's Hyper Apartment", 2700],
    [1513, "D", "GCD and MST", 2000],
    [1511, "D", "Min Cost String", 1600],
    [1510, "K", "King's Task", 1200],
    [1510, "C", "Cactus Not Enough", 2900],
    [1510, "B", "Button Lock", 2600],
    [1508, "C", "Complete the MST", 2500],
    [1506, "F", "Triangular Paths", 2000],
    [1503, "F", "Balance the Cards", 3500],
    [1499, "G", "Graph Coloring", 3100],
    [1498, "E", "Two Houses", 2200],
    [1498, "D", "Bananas in a Microwave", 2200],
    [1497, "D", "Genius", 2500],
    [1495, "F", "Squares", 3300],
    [1495, "D", "BFS Trees", 2600],
    [1495, "C", "Garden of the Sun", 2300],
    [1494, "F", "Delete The Edges", 2900],
    [1494, "E", "A-Z Graph", 2400],
    [1491, "G", "Switch and Flip", 2800],
    [1487, "E", "Cheap Dinner", 2000],
    [1487, "C", "Minimum Ties", 1500],
    [1486, "E", "Paired Payment", 2200],
    [1485, "D", "Multiples and Power Differences", 2200],
    [1482, "F", "Useful Edges", 2400],
    [1481, "D", "AB Graph", 2000],
    [1477, "D", "Nezzar and Hidden Permutations", 2800],
    [1476, "E", "Pattern Matching", 2300],
    [1476, "C", "Longest Simple Cycle", 1600],
    [1475, "C", "Ball in Berland", 1400],
    [1473, "E", "Minimum Path", 2400],
    [1472, "G", "Moving to the Capital", 2100],
    [1472, "C", "Long Jumps", 1100],
    [1470, "E", "Strange Permutation", 3200],
    [1470, "D", "Strange Housing", 2200],
    [1470, "B", "Strange Definition", 1900],
    [1468, "M", "Similar Sets", 2300],
    [1468, "J", "Road Reform", 1800],
    [1466, "H", "Finding satisfactory solutions", 3300],
    [1466, "F", "Euclid's nightmare", 2100],
    [1463, "E", "Plan of Lectures", 2400],
    [1461, "E", "Water Level", 2200],
    [1458, "D", "Flip and Reverse", 3100],
    [1454, "E", "Number of Simple Paths", 2000],
    [1450, "E", "Capitalism", 2700],
    [1444, "C", "Team-Building", 2500],
    [1442, "C", "Graph Transpositions", 2400],
    [1439, "B", "Graph Subset Problem", 2600],
    [1439, "A2", "Binary Table (Hard Version)", 1900],
    [1437, "D", "Minimal Height Tree", 1600],
    [1436, "D", "Bandit in a City", 1900],
    [1433, "G", "Reducing Delivery Cost", 2100],
    [1430, "G", "Yet Another DAG Problem", 2600],
    [1428, "B", "Belted Rooms", 1200],
    [1427, "G", "One Billion Shades of Grey", 3300],
    [1424, "M", "Ancient Language", 2200],
    [1423, "H", "Virus", 2500],
    [1423, "C", "Dušan's Railway", 3500],
    [1423, "B", "Valuable Paper", 1900],
    [1422, "D", "Returning Home", 2300],
    [1419, "F", "Rain of Fire", 2800],
    [1418, "C", "Mortal Kombat Tower", 1500],
    [1416, "D", "Graph and Queries", 2600],
    [1411, "C", "Peaceful Rooks", 1700],
    [1408, "G", "Clusterization Counting", 2700],
    [1408, "E", "Avoid Rainbow Cycles", 2400],
    [1407, "E", "Egor in the Republic of Dagestan", 2500],
    [1407, "D", "Discrete Centrifugal Jumps", 2200],
    [1406, "C", "Link Cut Centroids", 1700],
    [1404, "E", "Bricks", 2800],
    [1403, "B", "Spring cleaning", 2300],
    [1403, "A", "The Potion of Great Power", 2400],
    [1402, "C", "Star Trek", 2600],
    [1399, "F", "Yet Another Segments Subset", 2300],
    [1394, "B", "Boboniu Walks on Graph", 2300],
    [1392, "I", "Kevin and Grid", 3300],
    [1391, "E", "Pairs of Pairs", 2600],
    [1391, "C", "Cyclic Permutations ", 1500],
    [1389, "G", "Directing Edges", 2800],
    [1388, "D", "Captain Flint and Treasure", 2000],
    [1385, "G", "Columns Swaps", 2300],
    [1385, "E", "Directing Edges", 2000],
    [1383, "F", "Special Edges", 3200],
    [1383, "D", "Rearrange", 2800],
    [1383, "C", "String Transformation 2", 3100],
    [1383, "A", "String Transformation 1", 1700],
    [1375, "G", "Tree Modification", 2800],
    [1370, "F2", "The Hidden Pair (Hard Version)", 2700],
    [1370, "F1", "The Hidden Pair (Easy Version)", 2400],
    [1369, "D", "TediousLee", 1900],
    [1368, "G", "Shifting Dominoes", 3200],
    [1368, "E", "Ski Accidents", 2500],
    [1367, "E", "Necklace Assembly", 1900],
    [1366, "F", "Jog Around The Graph", 2700],
    [1365, "D", "Solve The Maze", 1700],
    [1364, "D", "Ehab's Last Corollary", 2100],
    [1361, "E", "James and the Chase", 3000],
    [1361, "C", "Johnny and Megan's Necklace", 2500],
    [1361, "A", "Johnny and Contribution", 1700],
    [1360, "E", "Polygon", 1300],
    [1354, "E", "Graph Coloring", 2100],
    [1349, "C", "Orac and Game of Life", 2000],
    [1348, "F", "Phoenix and Memory", 2600],
    [1346, "E", "Magic Tricks", 1700],
    [1346, "D", "Constructing the Dungeon", 1600],
    [1344, "C", "Quantifier Question", 2600],
    [1344, "B", "Monopole Magnets", 2000],
    [1343, "E", "Weights Distributing", 2100],
    [1340, "E", "Nastya and Bees", 3000],
    [1340, "D", "Nastya and Time Machine", 2600],
    [1340, "C", "Nastya and Unexpected Guest", 2400],
    [1340, "B", "Nastya and Scoreboard", 1700],
    [1338, "E", "JYPnation", 3500],
    [1336, "F", "Journey", 3500],
    [1335, "F", "Robots on a Grid", 2200],
    [1334, "E", "Divisor Paths", 2200],
    [1334, "D", "Minimum Euler Cycle", 1800],
    [1333, "D", "Challenges in school №41", 2100],
    [1328, "E", "Tree Queries", 1900],
    [1328, "D", "Carousel", 1800],
    [1327, "D", "Infinite Path", 2200],
    [1327, "B", "Princesses and Princes", 1200],
    [1325, "F", "Ehab's Last Theorem", 2500],
    [1325, "E", "Ehab's REAL Number Theory Problem", 2600],
    [1324, "F", "Maximum White Subtree", 1800],
    [1322, "C", "Instant Noodles", 2300],
    [1320, "B", "Navigation System", 1700],
    [1316, "D", "Nash Matrix", 2000],
    [1310, "D", "Tourism", 2300],
    [1307, "G", "Cow and Exercise", 3100],
    [1307, "D", "Cow and Fields", 1900],
    [1305, "G", "Kuroni and Antihype", 3500],
    [1304, "D", "Shortest and Longest LIS", 1800],
    [1301, "F", "Super Jaber", 2600],
    [1301, "D", "Time to Run", 2000],
    [1299, "D", "Around the World", 3000],
    [1296, "E1", "String Coloring (easy version)", 1800],
    [1292, "D", "Chaotic V.", 2700],
    [1291, "F", "Coffee Varieties (easy version)", 2800],
    [1290, "D", "Coffee Varieties (hard version)", 3000],
    [1290, "C", "Prefix Enlightenment", 2400],
    [1286, "B", "Numbers on Tree", 1800],
    [1285, "E", "Delete a Segment", 2300],
    [1284, "G", "Seollal", 3300],
    [1284, "F", "New Year and Social Network", 3200],
    [1283, "D", "Christmas Trees", 1800],
    [1282, "E", "The Cake Is a Lie", 2400],
    [1280, "C", "Jeremy Bearimy", 2000],
    [1278, "D", "Segment Tree", 2100],
    [1276, "B", "Two Fairs", 1900],
    [1272, "E", "Nearest Opposite Parity", 1900],
    [1270, "G", "Subset with Zero Sum", 2700],
    [1268, "D", "Invertation in Tournament", 3200],
    [1267, "F", "Foolprüf Security", 2600],
    [1266, "H", "Red-Blue Graph", 3400],
    [1266, "F", "Almost Same Distance", 2900],
    [1266, "D", "Decreasing Debts", 2000],
    [1263, "F", "Economic Difficulties", 2400],
    [1263, "D", "Secret Passwords", 1500],
    [1255, "B", "Fridge Lockers", 1100],
    [1253, "F", "Cheap Robot", 2500],
    [1253, "D", "Harmonious Graph", 1700],
    [1252, "L", "Road Construction", 2300],
    [1250, "N", "Wires", 2000],
    [1250, "K", "Projectors", 3100],
    [1250, "E", "The Coronation", 2300],
    [1245, "D", "Shichikuji and Power Grid", 1900],
    [1244, "D", "Paint the Tree", 1800],
    [1242, "E", "Planar Perimeter", 3200],
    [1242, "C", "Sum Balance", 2400],
    [1242, "B", "0-1 MST", 1900],
    [1240, "F", "Football", 3100],
    [1239, "F", "Swiper, no swiping!", 3400],
    [1239, "D", "Catowice City", 2400],
    [1238, "F", "The Maximum Subtree", 2200],
    [1236, "F", "Alice and the Cactus", 3000],
    [1228, "D", "Complete Tripartite", 1900],
    [1227, "E", "Arson In Berland Forest", 2200],
    [1220, "E", "Tourism", 2200],
    [1218, "G", "Alpha planetary system", 3000],
    [1218, "D", "Xor Spanning Tree", 2400],
    [1218, "A", "BubbleReactor", 2800],
    [1217, "F", "Forced Online Queries Problem", 2600],
    [1217, "D", "Coloring Edges", 2100],
    [1214, "E", "Petya and Construction Set", 2000],
    [1213, "G", "Path Queries", 1800],
    [1213, "F", "Unstable String Sort", 2100],
    [1211, "I", "Unusual Graph", 3000],
    [1211, "F", "kotlinkotlinkotlinkotlin...", 2300],
    [1210, "D", "Konrad and Company Evaluation", 2400],
    [1210, "A", "Anadi and Domino", 1700],
    [1209, "F", "Koala and Notebook", 2600],
    [1209, "D", "Cow and Snacks", 1700],
    [1205, "B", "Shortest Cycle", 1900],
    [1204, "C", "Anna, Svyatoslav and Maps", 1700],
    [1201, "E2", "Knightmare (hard)", 3000],
    [1201, "E1", "Knightmare (easy)", 2900],
    [1200, "F", "Graph Traveler", 2300],
    [1198, "E", "Rectangle Painting 2", 2500],
    [1198, "C", "Matching vs  Independent Set", 2000],
    [1187, "G", "Gang Up", 2500],
    [1186, "F", "Vus the Cossack and a Graph", 2400],
    [1184, "E3", "Daleks' Invasion (hard)", 2400],
    [1184, "E2", "Daleks' Invasion (medium)", 2100],
    [1184, "E1", "Daleks' Invasion (easy)", 1900],
    [1184, "B2", "The Doctor Meets Vader (Medium)", 2200],
    [1183, "E", "Subsequences (easy version)", 2000],
    [1178, "H", "Stock Exchange", 3500],
    [1176, "E", "Cover it!", 1700],
    [1176, "D", "Recover it!", 1800],
    [1174, "F", "Ehab and the Big Finale", 2400],
    [1170, "G", "Graph Decomposition", null],
    [1169, "B", "Pairs", 1500],
    [1167, "C", "News Distribution", 1400],
    [1166, "F", "Vicky's Delivery Service", 2400],
    [1163, "F", "Indecisive Taxi Fee", 3000],
    [1163, "E", "Magical Permutation", 2400],
    [1158, "C", "Permutation recovery", 2100],
    [1156, "G", "Optimizer", 2700],
    [1155, "F", "Delivery Oligopoly", 2800],
    [1152, "E", "Neko and Flashback", 2400],
    [1149, "E", "Election Promises", 3200],
    [1149, "D", "Abandoning Roads", 3000],
    [1148, "G", "Gold Experience", 3300],
    [1147, "D", "Palindrome XOR", 2400],
    [1147, "A", "Hide and Seek", 1500],
    [1146, "G", "Zoning Restrictions", 2700],
    [1146, "C", "Tree Diameter", 1700],
    [1144, "F", "Graph Without Long Directed Paths", 1700],
    [1142, "E", "Pink Floyd", 3200],
    [1141, "G", "Privatization of Roads in Treeland", 1900],
    [1139, "E", "Maximize Mex", 2400],
    [1139, "C", "Edgy Trees", 1500],
    [1137, "C", "Museums Tour", 2500],
    [1133, "F2", "Spanning Tree with One Fixed Degree", 1900],
    [1133, "F1", "Spanning Tree with Maximum Degree", 1600],
    [1131, "D", "Gourmet choice", 2000],
    [1120, "D", "Power Tree", 2500],
    [1111, "E", "Tree", 2500],
    [1108, "F", "MST Unification", 2100],
    [1107, "F", "Vasya and Endless Credits", 2600],
    [1106, "D", "Lunar New Year and a Wander", 1500],
    [1105, "D", "Kilani and the Game", 1900],
    [1103, "C", "Johnny Solving", 2700],
    [1102, "F", "Elongated Matrix", 2000],
    [1100, "E", "Andrew and Taxi", 2200],
    [1098, "C", "Construct a tree", 2400],
    [1095, "F", "Make It Connected", 1900],
    [1093, "D", "Beautiful Graph", 1700],
    [1091, "E", "New Year and the Acquaintance Estimation", 2400],
    [1090, "E", "Horseback Riding", 2300],
    [1089, "M", "Minegraphed", 2400],
    [1089, "H", "Harder Satisfiability", 3400],
    [1089, "D", "Distance Sum", 3100],
    [1089, "B", "Bimatching", 3200],
    [1082, "G", "Petya and Graph", 2400],
    [1082, "D", "Maximum Diameter Graph", 1800],
    [1081, "D", "Maximum Distance", 1800],
    [1076, "D", "Edge Deletion", 1800],
    [1070, "I", "Privatization of Roads in Berland", 2400],
    [1070, "A", "Find a Number", 2200],
    [1068, "C", "Colored Rooks", 1700],
    [1067, "B", "Multihedgehog", 1800],
    [1065, "B", "Vasya and Isolated Vertices", 1300],
    [1063, "B", "Labyrinth", 1800],
    [1062, "F", "Upgrading Cities", 2900],
    [1062, "D", "Fun with Integers", 1800]
];
let Hashingq = [
    [1553, "G", "Common Divisor Graph", 2700],
    [1553, "B", "Reverse String", 1300],
    [1538, "E", "Funny Substrings", 2100],
    [1537, "E2", "Erase and Extend (Hard Version)", 2200],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1536, "C", "Diluc and Kaeya", 1500],
    [1535, "F", "String Distance", 3000],
    [1533, "D", "String Searching", null],
    [1527, "C", "Sequence Pair Weight", 1600],
    [1520, "D", "Same Differences", 1200],
    [1500, "A", "Going Home", 1800],
    [1494, "E", "A-Z Graph", 2400],
    [1493, "D", "GCD of an Array", 2100],
    [1476, "G", "Minimum Difference", 3100],
    [1476, "E", "Pattern Matching", 2300],
    [1470, "B", "Strange Definition", 1900],
    [1469, "E", "A Bit Similar", 2400],
    [1468, "F", "Full Turn", 1700],
    [1466, "G", "Song of the Sirens", 2600],
    [1451, "C", "String Equality", 1400],
    [1418, "G", "Three Occurrences", 2500],
    [1394, "B", "Boboniu Walks on Graph", 2300],
    [1393, "E2", "Twilight and Ancient Scroll (harder version)", 3200],
    [1393, "E1", "Twilight and Ancient Scroll (easier version)", 2800],
    [1360, "F", "Spy-string", 1700],
    [1340, "F", "Nastya and CBS", 3300],
    [1326, "D2", "Prefix-Suffix Palindrome (Hard version)", 1800],
    [1326, "D1", "Prefix-Suffix Palindrome (Easy version)", 1500],
    [1322, "C", "Instant Noodles", 2300],
    [1320, "D", "Reachable Strings", 2500],
    [1313, "E", "Concatenation with intersection", 2700],
    [1286, "C2", "Madhouse (Hard version)", 2800],
    [1284, "D", "New Year and Conference", 2100],
    [1277, "D", "Let's Play the Words?", 1900],
    [1257, "F", "Make Them Similar", 2400],
    [1252, "F", "Regular Forestation", 2400],
    [1228, "D", "Complete Tripartite", 1900],
    [1225, "D", "Power Products", 1800],
    [1223, "F", "Stack Exterminable Arrays", 2600],
    [1214, "D", "Treasure Island", 1900],
    [1207, "G", "Indie Album", 2700],
    [1200, "E", "Compress Words", 2000],
    [1182, "D", "Complete Mirror", 2400],
    [1175, "F", "The Number of Subpermutations", 2500],
    [1166, "F", "Vicky's Delivery Service", 2400],
    [1156, "G", "Optimizer", 2700],
    [1137, "B", "Camp Schedule", 1600],
    [1133, "D", "Zero Quantity Maximization", 1500],
    [1129, "C", "Morse Code", 2400],
    [1109, "B", "Sasha and One More Name", 1800],
    [1081, "H", "Palindromic Magic", 3500],
    [1056, "E", "Check Transcription", 2100],
    [1051, "E", "Vasya and Big Integers", 2600],
    [1045, "I", "Palindrome Pairs", 1600],
    [1045, "B", "Space Isaac", 2400],
    [1043, "G", "Speckled Band", 3500],
    [1017, "E", "The Supersonic Rocket", 2400],
    [1003, "F", "Abbreviation", 2200],
    [985, "F", "Isomorphic Strings", 2300],
    [963, "D", "Frequency of String", 2500],
    [961, "F", "k-substrings", 2700],
    [958, "A2", "Death Stars (medium)", 2000],
    [903, "E", "Swapping Characters", 2200],
    [898, "F", "Restoring the Expression", 2300],
    [877, "F", "Ann and Books", 2300],
    [869, "E", "The Untended Antiquity", 2400],
    [856, "B", "Similar Words", 2300],
    [847, "L", "Berland SU Computer Network", 2400],
    [835, "D", "Palindromic characteristics", 1900],
    [825, "F", "String Compression", 2400],
    [822, "E", "Liar", 2400],
    [794, "D", "Labelling Cities", 2400],
    [786, "D", "Rap God", 3400],
    [778, "C", "Peterson Polyglot", 2500],
    [763, "D", "Timofey and a flat tree", 2900],
    [762, "C", "Two strings", 2100],
    [757, "C", "Felicity is Coming!", 1900],
    [733, "D", "Kostya the Sculptor", 1600],
    [727, "E", "Games on a CD", 2300],
    [724, "C", "Ray Tracing", 1800],
    [718, "D", "Andrew and Chemistry", 2900],
    [710, "F", "String Set Queries", 2400],
    [690, "F2", "Tree of Life (medium)", 2700],
    [650, "D", "Zip-line", 2600],
    [639, "C", "Bear and Polynomials", 2200],
    [633, "D", "Fibonacci-ish", 2000],
    [633, "C", "Spy Syndrome 2", 1900],
    [631, "D", "Messenger", 2100],
    [613, "E", "Puzzle Lover", 3200],
    [611, "D", "New Year and Ancient Prophecy", 2000],
    [607, "C", "Marbles", 2500],
    [601, "D", "Acyclic Organic Compounds", 2400],
    [580, "E", "Kefa and Watch", 2500],
    [574, "B", "Bear and Three Musketeers", 1500],
    [567, "E", "President and Roads", 2200],
    [559, "B", "Equivalent Strings", 1700],
    [542, "D", "Superhero's Job", 2600],
    [535, "D", "Tavas and Malekas", 1900],
    [534, "F", "Simplified Nonogram", 2400],
    [534, "E", "Berland Local Positioning System", 2400],
    [533, "F", "Encoding", 2400],
    [533, "E", "Correcting Mistakes", 1800],
    [526, "D", "Om Nom and Necklace", 2200],
    [525, "A", "Vitaliy and Pie", 1100],
    [524, "F", "And Yet Another Bracket Sequence", 2700],
    [514, "C", "Watto and Mechanism", 2000],
    [504, "E", "Misha and LCP on Tree", 3000],
    [486, "E", "LIS of Sequence", 2200],
    [486, "B", "OR in Matrix", 1300],
    [467, "D", "Fedor and Essay", 2400],
    [463, "C", "Gargari and Bishops", 1900],
    [452, "F", "Permutation", 2700],
    [444, "D", "DZY Loves Strings", 2500],
    [425, "D", "Sereja and Squares", 2300],
    [407, "D", "Largest Submatrix 3", 2700],
    [356, "E", "Xenia and String Problem", 3000],
    [350, "D", "Looking for Owls", 2400],
    [319, "D", "Have You Ever Heard About the Word?", 2800],
    [316, "G1", "Good Substrings", 1700],
    [291, "E", "Tree-String Problem", 2000],
    [245, "H", "Queries for Number of Palindromes", 1800],
    [242, "C", "King's Path", 1800],
    [228, "C", "Fractal Detector", 2000],
    [213, "E", "Two Permutations", 2700],
    [212, "B", "Polycarpus is Looking for Good Substrings", 2300],
    [196, "D", "The Next Good String", 2800],
    [190, "E", "Counter Attack", 2100],
    [182, "D", "Common Divisors", 1400],
    [154, "C", "Double Profiles", 2300],
    [128, "B", "String", 2100],
    [126, "B", "Password", 1700],
    [119, "D", "String Transformation", 2500],
    [113, "B", "Petr#", 2000],
    [82, "B", "Sets", 1700],
    [79, "C", "Beaver", 1800],
    [65, "D", "Harry Potter and the Sorting Hat", 2200],
    [54, "B", "Cutting Jigsaw Puzzle", 1800],
    [39, "J", "Spelling Check", 1500],
    [30, "E", "Tricky and Clever Password", 2800],
    [28, "D", "Don't fear, DravDe is kind", 2400],
    [25, "E", "Test", 2200],
    [19, "C", "Deletion of Repeats", 2200],
    [7, "D", "Palindrome Degree", 2200]
];
let Mathq = [
    [1560, "D", "Make a Power of Two", 1300],
    [1560, "C", "Infinity Table", 800],
    [1560, "B", "Who's Opposite?", 800],
    [1559, "E", "Mocha and Stars", 2200],
    [1559, "A", "Mocha and Math", 900],
    [1557, "C", "Moamen and XOR", 1700],
    [1557, "A", "Ezzat and Two Subsequences", 800],
    [1555, "A", "PizzaForces", 900],
    [1554, "E", "You", 2600],
    [1554, "B", "Cobb", 1700],
    [1553, "I", "Stairs", 3400],
    [1553, "G", "Common Divisor Graph", 2700],
    [1553, "F", "Pairwise Modulo", 2300],
    [1553, "E", "Permutation Shift", 2100],
    [1553, "A", "Digits Sum", 800],
    [1552, "I", "Organizing a Music Festival", 3400],
    [1552, "D", "Array Differentiation", 1800],
    [1551, "D2", "Domino (hard version)", 2100],
    [1551, "D1", "Domino (easy version)", 1700],
    [1551, "A", "Polycarp and Coins", 800],
    [1550, "D", "Excellent Arrays", 2300],
    [1550, "B", "Maximum Cost Deletion", 1000],
    [1550, "A", "Find The Array", 800],
    [1549, "A", "Gregor and Cryptography", 800],
    [1548, "E", "Gregor and the Two Painters", 3400],
    [1548, "D2", "Gregor and the Odd Cows (Hard)", 3300],
    [1548, "D1", "Gregor and the Odd Cows (Easy)", 2300],
    [1548, "C", "The Three Little Pigs", 2500],
    [1548, "B", "Integers Have Friends", 1800],
    [1547, "A", "Shortest Path with Obstacle", 800],
    [1546, "B", "AquaMoon and Stolen String", 1200],
    [1545, "D", "AquaMoon and Wrong Coordinate", 3000],
    [1545, "B", "AquaMoon and Chess", 1900],
    [1543, "E", "The Final Pursuit", 2700],
    [1543, "D2", "RPD and Rap Sheet (Hard Version)", 2200],
    [1543, "D1", "RPD and Rap Sheet (Easy Version)", 1700],
    [1543, "C", "Need for Pink Slips", 1900],
    [1543, "B", "Customising the Track", 900],
    [1543, "A", "Exciting Bets", 900],
    [1542, "E2", "Abnormal Permutation Pairs (hard version)", 2700],
    [1542, "E1", "Abnormal Permutation Pairs (easy version)", 2400],
    [1542, "D", "Priority Queue", 2200],
    [1542, "C", "Strange Function", 1600],
    [1542, "B", "Plus and Multiply", 1500],
    [1542, "A", "Odd Set", 800],
    [1541, "B", "Pleasant Pairs", 1200],
    [1540, "E", "Tasty Dishes", 3500],
    [1540, "C2", "Converging Array (Hard Version)", 2900],
    [1540, "C1", "Converging Array (Easy Version)", 2700],
    [1540, "B", "Tree Array", 2300],
    [1539, "A", "Contest Start", 1000],
    [1538, "G", "Gift Set", 2100],
    [1538, "F", "Interesting Function", 1500],
    [1538, "D", "Another Problem About Dividing Numbers", 1700],
    [1538, "C", "Number of Pairs", 1300],
    [1538, "B", "Friends and Candies", 800],
    [1537, "F", "Figure Fixing", 2200],
    [1537, "D", "Deleting Divisors", 1700],
    [1537, "C", "Challenging Cliffs", 1200],
    [1537, "B", "Bad Boy", 900],
    [1537, "A", "Arithmetic Array", 800],
    [1536, "F", "Omkar and Akmar", 2600],
    [1536, "E", "Omkar and Forest", 2300],
    [1535, "B", "Array Reodering", 900],
    [1534, "C", "Little Alawn's Puzzle", 1300],
    [1534, "B", "Histogram Ugliness", 1100],
    [1533, "A", "Travel to Bertown", null],
    [1532, "B", "Frog Jumping", null],
    [1530, "F", "Bingo", 2600],
    [1530, "D", "Secret Santa", 1600],
    [1530, "A", "Binary Decimal", 800],
    [1529, "B", "Sifid and Strange Subsequences", 1100],
    [1529, "A", "Eshag Loves Big Arrays", 800],
    [1528, "F", "AmShZ Farm", 3300],
    [1528, "B", "Kavi on Pairing Duty", 1700],
    [1527, "D", "MEX Tree", 2400],
    [1527, "C", "Sequence Pair Weight", 1600],
    [1526, "E", "Oolimry and Suffix Array", 2400],
    [1526, "D", "Kill Anton", 2200],
    [1526, "B", "I Hate 1111", 1400],
    [1525, "E", "Assimilation IV", 2100],
    [1525, "A", "Potion-making", 800],
    [1523, "E", "Crypto Lights", 2600],
    [1521, "B", "Nastia and a Good Array", 1300],
    [1521, "A", "Nastia and Nearly Good Numbers", 1000],
    [1520, "E", "Arranging The Sheep", 1400],
    [1520, "D", "Same Differences", 1200],
    [1520, "B", "Ordinary Numbers", 800],
    [1519, "D", "Maximum Sum of Products", 1600],
    [1519, "B", "The Cake Is a Lie", 800],
    [1519, "A", "Red and Blue Beans", 800],
    [1517, "A", "Sum of 2050", 800],
    [1516, "E", "Baby Ehab Plays with Permutations", 2500],
    [1516, "C", "Baby Ehab Partitions Again", 1700],
    [1515, "G", "Phoenix and Odometers", 2700],
    [1515, "E", "Phoenix and Computers", 2200],
    [1515, "B", "Phoenix and Puzzle", 1000],
    [1515, "A", "Phoenix and Gold", 800],
    [1514, "B", "AND 0, Sum Big", 1200],
    [1514, "A", "Perfectly Imperfect Array", 800],
    [1513, "E", "Cost Equilibrium", 2300],
    [1513, "B", "AND Sequences", 1400],
    [1512, "G", "Short Task", 1700],
    [1512, "E", "Permutation by Sum", 1600],
    [1511, "E", "Colorings and Dominoes", 2100],
    [1511, "B", "GCD Length", 1100],
    [1510, "J", "Japanese Game", 2700],
    [1510, "I", "Is It Rated?", 2700],
    [1510, "D", "Digits", 2100],
    [1506, "F", "Triangular Paths", 2000],
    [1506, "A", "Strange Table", 800],
    [1505, "F", "Math", 2200],
    [1504, "B", "Flip the Bits", 1200],
    [1503, "E", "2-Coloring", 3100],
    [1500, "B", "Two chandeliers", 2200],
    [1500, "A", "Going Home", 1800],
    [1499, "E", "Chaotic Merge", 2400],
    [1499, "D", "The Number of Pairs", 2100],
    [1499, "C", "Minimum Grid Path", 1500],
    [1499, "A", "Domino on Windowsill", 800],
    [1498, "F", "Christmas Game", 2500],
    [1498, "A", "GCD Sum", 800],
    [1497, "E2", "Square-free division (hard version)", 2500],
    [1497, "E1", "Square-free division (easy version)", 1700],
    [1497, "C2", "k-LCM (hard version)", 1600],
    [1497, "C1", "k-LCM (easy version)", 1200],
    [1497, "B", "M-arrays", 1200],
    [1496, "B", "Max and Mex", 1100],
    [1495, "D", "BFS Trees", 2600],
    [1495, "A", "Diamond Miner", 1200],
    [1493, "E", "Enormous XOR", 2600],
    [1493, "D", "GCD of an Array", 2100],
    [1492, "D", "Genius's Gambit", 1900],
    [1492, "B", "Card Deck", 1100],
    [1492, "A", "Three swimmers", 800],
    [1491, "G", "Switch and Flip", 2800],
    [1491, "D", "Zookeeper and The Infinite Zoo", 1800],
    [1491, "B", "Minimal Cost", 1200],
    [1490, "G", "Old Floppy Drive ", 1900],
    [1490, "F", "Equalize the Array", 1500],
    [1490, "C", "Sum of Cubes", 1100],
    [1490, "B", "Balanced Remainders", 1000],
    [1490, "A", "Dense Array", 800]
];
let bruteq = [
    [1560, "F2", "Nearest Beautiful Number (hard version)", 2100],
    [1560, "F1", "Nearest Beautiful Number (easy version)", 1900],
    [1559, "D2", "Mocha and Diana (Hard Version)", 2500],
    [1559, "D1", "Mocha and Diana (Easy Version)", 1400],
    [1557, "E", "Assiut Chess", 2800],
    [1557, "A", "Ezzat and Two Subsequences", 800],
    [1555, "D", "Say No to Palindromes", 1600],
    [1555, "C", "Coin Rows", 1300],
    [1555, "B", "Two Tables", 1300],
    [1555, "A", "PizzaForces", 900],
    [1554, "B", "Cobb", 1700],
    [1553, "G", "Common Divisor Graph", 2700],
    [1553, "E", "Permutation Shift", 2100],
    [1553, "C", "Penalty", 1200],
    [1553, "B", "Reverse String", 1300],
    [1552, "G", "A Serious Referee", 3000],
    [1552, "D", "Array Differentiation", 1800],
    [1551, "F", "Equidistant Vertices", 2200],
    [1551, "E", "Fixed Points", 2000],
    [1550, "E", "Stringforces", 2500],
    [1550, "C", "Manhattan Subarrays", 1700],
    [1548, "D2", "Gregor and the Odd Cows (Hard)", 3300],
    [1548, "A", "Web of Lies", 1400],
    [1547, "F", "Array Stabilization (GCD version)", 1900],
    [1546, "A", "AquaMoon and Two Arrays", 800],
    [1545, "F", "AquaMoon and Potatoes", 3500],
    [1545, "C", "AquaMoon and Permutations", 2800],
    [1543, "D2", "RPD and Rap Sheet (Hard Version)", 2200],
    [1543, "C", "Need for Pink Slips", 1900],
    [1541, "B", "Pleasant Pairs", 1200],
    [1540, "D", "Inverse Inversions", 3200],
    [1540, "B", "Tree Array", 2300],
    [1538, "A", "Stone Game", 800],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1536, "B", "Prinzessin der Verurteilung", 1200],
    [1536, "A", "Omkar and Bad Story", 800],
    [1535, "F", "String Distance", 3000],
    [1535, "B", "Array Reodering", 900],
    [1535, "A", "Fair Playoff", 800],
    [1534, "A", "Colour the Flag", 800],
    [1531, "E2", "Сортировка слиянием", null],
    [1530, "C", "Pursuit", 1200],
    [1526, "D", "Kill Anton", 2200],
    [1526, "C1", "Potions (Easy Version)", 1500],
    [1525, "F", "Goblins And Gnomes", 2800],
    [1523, "D", "Love-Hate", 2400],
    [1523, "C", "Compression and Expansion", 1600],
    [1520, "G", "To Go Or Not To Go?", 2200],
    [1520, "B", "Ordinary Numbers", 800],
    [1520, "A", "Do Not Be Distracted!", 800],
    [1519, "F", "Chests and Keys", 3200],
    [1519, "D", "Maximum Sum of Products", 1600],
    [1519, "C", "Berland Regional", 1400],
    [1516, "B", "AGAGA XOOORRR", 1500],
    [1515, "H", "Phoenix and Bits", 3500],
    [1515, "B", "Phoenix and Puzzle", 1000],
    [1513, "F", "Swapping Problem", 2500],
    [1512, "G", "Short Task", 1700],
    [1512, "F", "Education", 1900],
    [1512, "E", "Permutation by Sum", 1600],
    [1512, "A", "Spy Detected!", 800],
    [1511, "G", "Chips on a Board", 2700],
    [1511, "F", "Chainword", 2700],
    [1511, "D", "Min Cost String", 1600],
    [1511, "C", "Yet Another Card Deck", 1100],
    [1510, "K", "King's Task", 1200],
    [1508, "F", "Optimal Encoding", 3500],
    [1508, "E", "Tree Calendar", 3100],
    [1508, "C", "Complete the MST", 2500],
    [1506, "G", "Maximize the Remaining String", 2000],
    [1506, "C", "Double-ended Strings", 1000],
    [1500, "C", "Matrix Sorting", 2600],
    [1500, "B", "Two chandeliers", 2200],
    [1500, "A", "Going Home", 1800],
    [1499, "C", "Minimum Grid Path", 1500],
    [1499, "B", "Binary Removals", 1000],
    [1498, "E", "Two Houses", 2200],
    [1498, "C", "Planar Reflections", 1600],
    [1498, "A", "GCD Sum", 800],
    [1497, "A", "Meximization", 800],
    [1496, "A", "Split it!", 900],
    [1495, "E", "Qingshan and Daniel", 3200],
    [1494, "F", "Delete The Edges", 2900],
    [1494, "B", "Berland Crossword", 1400],
    [1494, "A", "ABC String", 900],
    [1493, "D", "GCD of an Array", 2100],
    [1493, "C", "K-beautiful Strings", 2000],
    [1493, "B", "Planet Lapituletti", 1300],
    [1492, "E", "Almost Fault-Tolerant Database", 2500],
    [1491, "I", "Ruler Of The Zoo", 3500],
    [1491, "E", "Fib-tree", 2400],
    [1491, "C", "Pekora and Trampoline", 1700],
    [1491, "B", "Minimal Cost", 1200],
    [1491, "A", "K-th Largest Value", 800],
    [1490, "C", "Sum of Cubes", 1100],
    [1490, "B", "Balanced Remainders", 1000],
    [1488, "C", "Two Policemen", 1900],
    [1487, "E", "Cheap Dinner", 2000],
    [1487, "D", "Pythagorean Triples", 1500],
    [1487, "C", "Minimum Ties", 1500],
    [1486, "E", "Paired Payment", 2200],
    [1485, "C", "Floor and Mod", 1700],
    [1485, "A", "Add and Divide", 1000],
    [1482, "C", "Basic Diplomacy", 1600],
    [1481, "D", "AB Graph", 2000],
    [1481, "C", "Fence Painting", 1600],
    [1481, "B", "New Colony", 1100],
    [1479, "D", "Odd Mineral Resource", 2900],
    [1478, "B", "Nezzar and Lucky Number", 1100],
    [1478, "A", "Nezzar and Colorful Balls", 800],
    [1476, "B", "Inflation", 1300],
    [1475, "F", "Unusual Matrix", 1900],
    [1475, "B", "New Year's Number", 900],
    [1474, "C", "Array Destruction", 1700],
    [1473, "B", "String LCM", 1000],
    [1472, "F", "New Year's Puzzle", 2100],
    [1471, "B", "Strange List", 1100],
    [1470, "C", "Strange Shuffle", 2500],
    [1469, "E", "A Bit Similar", 2400],
    [1469, "D", "Ceil Divisions", 1700],
    [1468, "K", "The Robot", 1600],
    [1467, "B", "Hills And Valleys", 1700],
    [1466, "E", "Apollo versus Pan", 1800],
    [1466, "A", "Bovine Dilemma", 800],
    [1462, "C", "Unique Number", 900],
    [1461, "E", "Water Level", 2200],
    [1461, "D", "Divide and Summarize", 1600],
    [1461, "B", "Find the Spruce", 1400],
    [1455, "E", "Four Points", 2400],
    [1453, "D", "Checkpoints", 1900],
    [1452, "E", "Two Editorials", 2500],
    [1450, "B", "Balls of Steel", 1000],
    [1444, "E", "Finding the Vertex", 3500],
    [1444, "A", "Division", 1500],
    [1443, "E", "Long Permutation", 2400],
    [1438, "E", "Yurii Can Do Everything", 2500],
    [1437, "A", "Marketing Scheme", 800],
    [1433, "G", "Reducing Delivery Cost", 2100],
    [1431, "H", "Rogue-like Game", 2600],
    [1430, "A", "Number of Apartments", 900],
    [1428, "C", "ABBB", 1100],
    [1426, "E", "Rock, Paper, Scissors", 1800],
    [1421, "E", "Swedish Heroes", 2700]
];
let treeq = [
    [1559, "D2", "Mocha and Diana (Hard Version)", 2500],
    [1559, "D1", "Mocha and Diana (Easy Version)", 1400],
    [1555, "F", "Good Graph", 2700],
    [1555, "E", "Boring Segments", 2100],
    [1553, "H", "XOR and Distance", 2900],
    [1551, "F", "Equidistant Vertices", 2200],
    [1547, "G", "How Many Paths?", 2100],
    [1540, "B", "Tree Array", 2300],
    [1535, "E", "Gold Transfer", 2200],
    [1535, "D", "Playoff Tournament", 1800],
    [1534, "H", "Lost Nodes", 3500],
    [1534, "D", "Lost Tree", 1800],
    [1528, "E", "Mashtali and Hagh Trees", 2900],
    [1528, "C", "Trees of Tranquillity", 2300],
    [1528, "A", "Parsa's Humongous Tree", 1600],
    [1527, "D", "MEX Tree", 2400],
    [1523, "C", "Compression and Expansion", 1600],
    [1521, "D", "Nastia Plays with a Tree", 2500],
    [1519, "E", "Off by One", 2700],
    [1517, "F", "Reunion", 3200],
    [1515, "F", "Phoenix and Earthquake", 2600],
    [1511, "C", "Yet Another Card Deck", 1100],
    [1508, "E", "Tree Calendar", 3100],
    [1508, "C", "Complete the MST", 2500],
    [1499, "F", "Diameter Cuts", 2400],
    [1498, "F", "Christmas Game", 2500],
    [1495, "F", "Squares", 3300],
    [1495, "D", "BFS Trees", 2600],
    [1494, "D", "Dogeforces", 2300],
    [1491, "H", "Yuezheng Ling and Dynamic Tree", 3400],
    [1491, "E", "Fib-tree", 2400],
    [1486, "F", "Pairs of Paths", 2600],
    [1485, "E", "Move and Swap", 2500],
    [1482, "H", "Exam", 3400],
    [1481, "F", "AB Tree", 3100],
    [1479, "D", "Odd Mineral Resource", 2900],
    [1467, "E", "Distinctive Roots in a Tree", 2500],
    [1466, "D", "13th Labour of Heracles", 1500],
    [1464, "F", "My Beautiful Madness", 3500],
    [1463, "E", "Plan of Lectures", 2400],
    [1458, "F", "Range Diameter Sum", 3500],
    [1454, "E", "Number of Simple Paths", 2000],
    [1453, "E", "Dog Snacks", 2300],
    [1452, "G", "Game On Tree", 2700],
    [1450, "G", "Communism", 3500],
    [1446, "C", "Xor Tree", 2100],
    [1444, "E", "Finding the Vertex", 3500],
    [1442, "E", "Black, White and Grey Tree", 3000],
    [1439, "E", "Cheat and Win", 3500],
    [1438, "F", "Olha and Igor", 3000],
    [1437, "G", "Death DBMS", 2600],
    [1437, "D", "Minimal Height Tree", 1600],
    [1436, "D", "Bandit in a City", 1900],
    [1427, "F", "Boring Card Game", 3200],
    [1423, "C", "Dušan's Railway", 3500],
    [1416, "D", "Graph and Queries", 2600],
    [1416, "C", "XOR Inverse", 2000],
    [1413, "F", "Roads and Ramen", 2800],
    [1408, "G", "Clusterization Counting", 2700],
    [1408, "E", "Avoid Rainbow Cycles", 2400],
    [1406, "C", "Link Cut Centroids", 1700],
    [1404, "B", "Tree Tag", 1900],
    [1403, "B", "Spring cleaning", 2300],
    [1402, "C", "Star Trek", 2600],
    [1401, "D", "Maximum Distributed Tree", 1800],
    [1399, "E2", "Weights Division (hard version)", 2200],
    [1399, "E1", "Weights Division (easy version)", 2000],
    [1396, "E", "Distance Matching", 3200],
    [1394, "D", "Boboniu and Jianghu", 2800],
    [1391, "E", "Pairs of Pairs", 2600],
    [1389, "G", "Directing Edges", 2800],
    [1388, "D", "Captain Flint and Treasure", 2000],
    [1388, "C", "Uncle Bogdan and Country Happiness", 1800],
    [1387, "B2", "Village (Maximum)", 2500],
    [1387, "B1", "Village (Minimum)", 2100],
    [1385, "F", "Removing Leaves", 2300],
    [1383, "C", "String Transformation 2", 3100],
    [1383, "A", "String Transformation 1", 1700],
    [1381, "D", "The Majestic Brown Tree Snake", 3000],
    [1380, "E", "Merging Towers", 2300],
    [1379, "E", "Inverse Genealogy", 2800],
    [1375, "G", "Tree Modification", 2800],
    [1370, "F2", "The Hidden Pair (Hard Version)", 2700],
    [1370, "F1", "The Hidden Pair (Easy Version)", 2400],
    [1369, "D", "TediousLee", 1900],
    [1368, "G", "Shifting Dominoes", 3200],
    [1364, "D", "Ehab's Last Corollary", 2100],
    [1363, "E", "Tree Shuffling", 2000],
    [1363, "C", "Game On Leaves", 1600],
    [1361, "E", "James and the Chase", 3000],
    [1361, "D", "Johnny and James", 2900],
    [1344, "E", "Train Tracks", 3100],
    [1340, "D", "Nastya and Time Machine", 2600],
    [1338, "D", "Nested Rubber Bands", 2700],
    [1338, "B", "Edge Weight Assignment", 1800],
    [1336, "F", "Journey", 3500],
    [1336, "A", "Linova and Kingdom", 1600],
    [1332, "F", "Independent Set", 2500],
    [1328, "E", "Tree Queries", 1900],
    [1326, "G", "Spiderweb Trees", 3500],
    [1325, "C", "Ehab and Path-etic MEXs", 1500],
    [1324, "F", "Maximum White Subtree", 1800],
    [1322, "F", "Assigning Fares", 3500],
    [1320, "E", "Treeland and Viruses", 3000],
    [1311, "E", "Construct the Binary Tree", 2200],
    [1307, "F", "Cow and Vacation", 3300],
    [1305, "D", "Kuroni and the Celebration", 1900],
    [1304, "E", "1-Trees and Queries", 2000],
    [1303, "G", "Sum of Prefix Sums", 2700],
    [1299, "D", "Around the World", 3000],
    [1297, "E", "Modernization of Treeland", null],
    [1296, "F", "Berland Beauty", 2100],
    [1294, "F", "Three Paths on a Tree", 2000],
    [1292, "D", "Chaotic V.", 2700],
    [1292, "C", "Xenon's Attack on the Gangs", 2300],
    [1286, "B", "Numbers on Tree", 1800],
    [1285, "E", "Delete a Segment", 2300],
    [1285, "D", "Dr. Evil Underscores", 1900],
    [1284, "F", "New Year and Social Network", 3200],
    [1283, "F", "DIY Garland", 2200],
    [1280, "D", "Miss Punyverse", 2500],
    [1280, "C", "Jeremy Bearimy", 2000],
    [1278, "E", "Tests for problem D", 2200],
    [1278, "D", "Segment Tree", 2100],
    [1276, "D", "Tree Elimination", 2900],
    [1263, "F", "Economic Difficulties", 2400],
    [1260, "F", "Colored Tree", 2700],
    [1254, "E", "Send Tree to Charlie", 3300],
    [1254, "D", "Tree Queries", 2700],
    [1253, "F", "Cheap Robot", 2500],
    [1252, "F", "Regular Forestation", 2400],
    [1252, "D", "Find String in a Grid", 3000],
    [1252, "B", "Cleaning Robots", 2300],
    [1249, "F", "Maximum Weight Subset", 2200],
    [1245, "D", "Shichikuji and Power Grid", 1900],
    [1244, "D", "Paint the Tree", 1800],
    [1238, "F", "The Maximum Subtree", 2200],
    [1228, "F", "One Node is Gone", 2500],
    [1225, "F", "Tree Factory", 2500],
    [1223, "E", "Paint the Tree", 2100],
    [1220, "E", "Tourism", 2200],
    [1217, "F", "Forced Online Queries Problem", 2600],
    [1214, "H", "Tiles Placement", 2800],
    [1214, "E", "Petya and Construction Set", 2000],
    [1213, "G", "Path Queries", 1800],
    [1211, "H", "Road Repair in Treeland", 3100],
    [1211, "G", "King's Path", 2500],
    [1210, "C", "Kamil and Making a Stream", 2000],
    [1209, "F", "Koala and Notebook", 2600],
    [1208, "H", "Red Blue Tree", 3500],
    [1207, "G", "Indie Album", 2700],
    [1205, "D", "Almost All", 2700],
    [1193, "B", "Magic Tree", null],
    [1192, "B", "Dynamic Diameter", null],
    [1188, "A2", "Add on a Tree: Revolution", 2500],
    [1188, "A1", "Add on a Tree", 1600],
    [1187, "E", "Tree Painting", 2100],
    [1184, "E3", "Daleks' Invasion (hard)", 2400],
    [1184, "E2", "Daleks' Invasion (medium)", 2100],
    [1184, "E1", "Daleks' Invasion (easy)", 1900],
    [1182, "D", "Complete Mirror", 2400],
    [1181, "D", "Irrigation", 2200],
    [1179, "D", "Fedor Runs for President", 2700],
    [1179, "C", "Serge and Dining Room", 2200],
    [1176, "E", "Cover it!", 1700],
    [1175, "E", "Minimal Segment Cover", 2200],
    [1174, "F", "Ehab and the Big Finale", 2400],
    [1172, "B", "Nauuo and Circle", 1900],
    [1168, "D", "Anagram Paths", 3000],
    [1158, "E", "Strange device", 3400],
    [1156, "D", "0-1-Tree", 2200],
    [1153, "D", "Serval and Rooted Tree", 1900],
    [1152, "D", "Neko and Aki's Prank", 2100],
    [1149, "C", "Tree Generator™", 2700],
    [1146, "F", "Leaf Partition", 2500],
    [1143, "C", "Queen", 1400],
    [1142, "B", "Lynyrd Skynyrd", 2000],
    [1141, "G", "Privatization of Roads in Treeland", 1900],
    [1140, "G", "Double Tree", 2700],
    [1139, "C", "Edgy Trees", 1500],
    [1137, "F", "Matches Are Not a Child's Play ", 3400],
    [1132, "G", "Greedy Subsequences", 2400],
    [1129, "E", "Legendary Tree", 3100],
    [1120, "D", "Power Tree", 2500],
    [1119, "F", "Niyaz and Small Degrees", 3400],
    [1118, "F2", "Tree Cutting (Hard Version)", 2700],
    [1118, "F1", "Tree Cutting (Easy Version)", 1800],
    [1111, "E", "Tree", 2500],
    [1110, "G", "Tree-Tac-Toe ", 3100],
    [1110, "F", "Nearest Leaf", 2600],
    [1109, "F", "Sasha and Algorithm of Silence's Sounds", 3200],
    [1109, "D", "Sasha and Interesting Fact from Graph Theory", 2400],
    [1101, "D", "GCD Counting", 2000],
    [1099, "F", "Cookies", 2400],
    [1098, "C", "Construct a tree", 2400],
    [1098, "A", "Sum in the tree", 1600],
    [1097, "G", "Vladislav and a Great Legend", 3000],
    [1092, "F", "Tree with Maximum Cost", 1900],
    [1092, "E", "Minimal Diameter Forest", 2000],
    [1088, "F", "Ehab and a weird weight formula", 2800],
    [1088, "E", "Ehab and a component choosing problem", 2400],
    [1085, "D", "Minimum Diameter Tree", 1700],
    [1083, "C", "Max Mex", 2900],
    [1083, "A", "The Fair Nut and the Best Path", 1800],
    [1082, "F", "Speed Dial", 2800],
    [1076, "E", "Vasya and a Tree", 1900],
    [1073, "F", "Choosing Two Paths", 2500],
    [1067, "E", "Random Forest Rank", 2800],
    [1065, "F", "Up and Down the Tree", 2500],
    [1062, "E", "Company", 2300],
    [1060, "E", "Sergey and Subway", 2000],
    [1059, "E", "Split the Tree", 2400],
    [1057, "A", "Bmail Computer Network", 900],
    [1056, "D", "Decorate Apple Tree", 1600],
    [1055, "F", "Tree and XOR", 2900],
    [1053, "E", "Euler tour", 3500],
    [1051, "F", "The Shortest Statement", 2400],
    [1045, "J", "Moonwalk challenge", 2600],
    [1045, "D", "Interstellar battle", 2200],
    [1045, "C", "Hyperspace Highways", 2300],
    [1045, "A", "Last chance", 2500],
    [1044, "B", "Intersecting Subtrees", 1900],
    [1042, "F", "Leaf Sets", 2400],
    [1039, "D", "You Are Given a Tree", 2800],
    [1037, "D", "Valid BFS?", 1700],
    [1034, "C", "Region Separation", 2700],
    [1032, "F", "Vasya and Maximum Matching", 2400],
    [1025, "D", "Recovering BST", 2100],
    [1023, "G", "Pisces", 3400],
    [1023, "F", "Mobile Phone Network", 2600],
    [1019, "E", "Raining season", 3200],
    [1016, "F", "Road Projects", 2600],
    [1010, "F", "Tree", 3400],
    [1010, "D", "Mars rover", 2000],
    [1009, "F", "Dominant Indices", 2300],
    [1007, "D", "Ants", 3200],
    [1006, "E", "Military Problem", 1600],
    [1004, "E", "Sonya and Ice Cream", 2400],
    [1000, "G", "Two-Paths", 2700],
    [1000, "E", "We Need More Bosses", 2100],
    [997, "D", "Cycles in product", 2900],
    [995, "F", "Cowmpany Cowmpensation", 2700],
    [990, "G", "GCD Counting", 2400],
    [990, "F", "Flow Control", 2400],
    [986, "E", "Prince's Problem", 2800],
    [983, "E", "NN country", 2800],
    [982, "D", "Shark", 1900],
    [982, "C", "Cut 'em all!", 1500],
    [981, "C", "Useful Decomposition", 1400],
    [980, "F", "Cactus to Tree", 2900],
    [980, "E", "The Number Games", 2200],
    [979, "D", "Kuro and GCD and XOR and SUM", 2200],
    [979, "C", "Kuro and Walking Route", 1600],
    [965, "E", "Short Code", 2200],
    [963, "B", "Destruction of a Tree", 2000],
    [962, "G", "Visible Black Areas", 2800],
    [962, "F", "Simple Cycles Edges", 2400],
    [960, "H", "Santa's Gift", 3100],
    [960, "E", "Alternating Tree", 2300],
    [960, "D", "Full Binary Tree Queries", 2100],
    [959, "C", "Mahmoud and Ehab and the wrong algorithm", 1500],
    [958, "B2", "Maximum Control (medium)", 2200],
    [955, "F", "Heaps", 2600],
    [936, "E", "Iqea", 3400],
    [935, "E", "Fafa and Ancient Mathematics", 2300],
    [932, "D", "Tree", 2200],
    [930, "A", "Peculiar apple-tree", 1500],
    [928, "D", "Autocompletion", 1900],
    [925, "E", "May Holidays", 2900],
    [923, "F", "Public Service", 3200],
    [923, "C", "Perfect Security", 1800],
    [917, "E", "Upside Down", 3400],
    [917, "D", "Stranger Trees", 2600],
    [916, "E", "Jamie and Tree", 2400],
    [916, "D", "Jamie and To-do List", 2200],
    [915, "F", "Imbalance Value of a Tree", 2400],
    [914, "H", "Ember and Storm's Tree Game", 3400],
    [914, "E", "Palindromes in a Tree", 2400],
    [913, "B", "Christmas Spruce", 1200],
    [911, "F", "Tree Destruction", 2400],
    [901, "A", "Hashing Trees", 1500],
    [894, "D", "Ralph And His Tour in Binary Country", 2200],
    [893, "F", "Subtree Minimum Query", 2300],
    [891, "D", "Sloth", 3100],
    [886, "C", "Petya and Catacombs", 1300],
    [877, "E", "Danil and a Part-time Job", 2000],
    [871, "E", "Restore the Tree", 2900],
    [870, "E", "Points, Lines and Ready-made Titles", 2300],
    [868, "E", "Policeman and a Tree", 2700],
    [864, "F", "Cities Excursions", 2700],
    [862, "B", "Mahmoud and Ehab and the bipartiteness", 1300],
    [860, "E", "Arkady and a Nobody-men", 2700],
    [859, "E", "Desk Disorder", 2100],
    [859, "D", "Third Month Insanity", 2100],
    [856, "D", "Masha and Cactus", 2400],
    [856, "B", "Similar Words", 2300],
    [855, "G", "Harry Vs Voldemort", 3300],
    [855, "D", "Rowena Ravenclaw's Diadem", 2500],
    [855, "C", "Helga Hufflepuff's Cup", 2000],
    [852, "I", "Dating", 2300],
    [847, "L", "Berland SU Computer Network", 2400]
];
let Sortingq = [
    [1560, "E", "Polycarp and String Transformation", 1800],
    [1557, "B", "Moamen and k-subarrays", 1100],
    [1557, "A", "Ezzat and Two Subsequences", 800],
    [1555, "E", "Boring Segments", 2100],
    [1552, "G", "A Serious Referee", 3000],
    [1552, "F", "Telepanting", 2200],
    [1552, "E", "Colors and Intervals", 2300],
    [1552, "C", "Maximize the Intersections", 1800],
    [1552, "B", "Running for Gold", 1500],
    [1552, "A", "Subsequence Permutation", 800],
    [1551, "C", "Interesting Story", 1500],
    [1550, "D", "Excellent Arrays", 2300],
    [1547, "E", "Air Conditioners", 1500],
    [1545, "A", "AquaMoon and Strange Sort", 1500],
    [1540, "A", "Great Graphs", 1400],
    [1539, "F", "Strange Array", 2600],
    [1539, "D", "PriceFixed", 1600],
    [1539, "C", "Stable Groups", 1200],
    [1535, "B", "Array Reodering", 900],
    [1534, "H", "Lost Nodes", 3500],
    [1534, "G", "A New Beginning", 3300],
    [1532, "D", "Teams Forming", null],
    [1530, "C", "Pursuit", 1200],
    [1529, "B", "Sifid and Strange Subsequences", 1100],
    [1526, "A", "Mean Inequality", 800],
    [1525, "C", "Robot Collisions", 2000],
    [1519, "E", "Off by One", 2700],
    [1519, "C", "Berland Regional", 1400],
    [1517, "B", "Morning Jogging", 1200],
    [1515, "I", "Phoenix and Diamonds", 3400],
    [1515, "H", "Phoenix and Bits", 3500],
    [1515, "D", "Phoenix and Socks", 1500],
    [1514, "E", "Baby Ehab's Hyper Apartment", 2700],
    [1514, "D", "Cut and Stick", 2000],
    [1513, "F", "Swapping Problem", 2500],
    [1513, "E", "Cost Equilibrium", 2300],
    [1513, "D", "GCD and MST", 2000],
    [1508, "E", "Tree Calendar", 3100],
    [1508, "D", "Swap Pass", 3000],
    [1506, "F", "Triangular Paths", 2000],
    [1503, "D", "Flip the Cards", 2600],
    [1503, "C", "Travelling Salesman Problem", 2200],
    [1501, "B", "Napoleon Cake", 900],
    [1500, "D", "Tiles for Bathroom", 2900],
    [1498, "E", "Two Houses", 2200],
    [1497, "A", "Meximization", 800],
    [1495, "A", "Diamond Miner", 1200],
    [1494, "D", "Dogeforces", 2300],
    [1493, "D", "GCD of an Array", 2100],
    [1490, "F", "Equalize the Array", 1500],
    [1487, "E", "Cheap Dinner", 2000],
    [1487, "A", "Arena", 800],
    [1486, "B", "Eastern Exhibition", 1500],
    [1485, "F", "Copy or Prefix Sum", 2400],
    [1480, "B", "The Great Hero", 900],
    [1478, "C", "Nezzar and Symmetric Array", 1700],
    [1477, "C", "Nezzar and Nice Beatmap", 2200],
    [1476, "G", "Minimum Difference", 3100],
    [1476, "E", "Pattern Matching", 2300],
    [1475, "G", "Strange Beauty", 1900],
    [1475, "E", "Advertising Agency", 1600],
    [1475, "D", "Cleaning the Phone", 1800],
    [1474, "C", "Array Destruction", 1700],
    [1473, "A", "Replacing Elements", 800],
    [1472, "F", "New Year's Puzzle", 2100],
    [1472, "E", "Correct Placement", 1700],
    [1472, "D", "Even-Odd Game", 1200],
    [1470, "A", "Strange Birthday Party", 1300],
    [1468, "D", "Firecrackers", 1700],
    [1466, "F", "Euclid's nightmare", 2100],
    [1466, "D", "13th Labour of Heracles", 1500],
    [1463, "E", "Plan of Lectures", 2400],
    [1462, "E2", "Close Tuples (hard version)", 1700],
    [1462, "E1", "Close Tuples (easy version)", 1500],
    [1461, "D", "Divide and Summarize", 1600],
    [1455, "D", "Sequence and Swaps", 1600],
    [1452, "E", "Two Editorials", 2500],
    [1452, "B", "Toy Blocks", 1400],
    [1450, "A", "Avoid Trygub", 800],
    [1446, "A", "Knapsack", 1300],
    [1445, "A", "Array Rearrangment", 800],
    [1444, "B", "Divide and Sum", 1900],
    [1443, "C", "The Delivery Dilemma", 1400],
    [1443, "B", "Saving the City", 1300],
    [1438, "B", "Valerii Against Everyone", 1000],
    [1437, "C", "Chef Monocarp", 1800],
    [1430, "B", "Barrels", 800],
    [1428, "E", "Carrots for Rabbits", 2200],
    [1427, "B", "Chess Cheater", 1400],
    [1427, "A", "Avoiding Zero", 900],
    [1426, "D", "Non-zero Segments", 1500],
    [1424, "M", "Ancient Language", 2200],
    [1424, "G", "Years", 1300],
    [1422, "D", "Returning Home", 2300],
    [1420, "D", "Rescue Nibel!", 1800],
    [1420, "A", "Cubes Sorting", 900],
    [1419, "D2", "Sage's Birthday (hard version)", 1500],
    [1419, "D1", "Sage's Birthday (easy version)", 1000],
    [1418, "B", "Negative Prefixes", 1300],
    [1417, "B", "Two Arrays", 1100],
    [1416, "C", "XOR Inverse", 2000],
    [1413, "C", "Perform Easily", 1900],
    [1409, "E", "Two Platforms", 1800],
    [1408, "E", "Avoid Rainbow Cycles", 2400],
    [1408, "D", "Searchlights", 2000],
    [1406, "B", "Maximum Product", 1200],
    [1403, "A", "The Potion of Great Power", 2400],
    [1402, "B", "Roads", 2900],
    [1402, "A", "Fancy Fence", 1800],
    [1401, "E", "Divide Square", 2400],
    [1401, "D", "Maximum Distributed Tree", 1800],
    [1401, "C", "Mere Array", 1300],
    [1399, "F", "Yet Another Segments Subset", 2300],
    [1399, "E2", "Weights Division (hard version)", 2200],
    [1399, "A", "Remove Smallest", 800],
    [1398, "E", "Two Types of Spells", 2200],
    [1398, "D", "Colored Rectangles", 1800],
    [1398, "B", "Substring Removal Game", 800],
    [1397, "B", "Power Sequence", 1500],
    [1396, "D", "Rainbow Rectangles", 3300],
    [1394, "D", "Boboniu and Jianghu", 2800],
    [1394, "A", "Boboniu Chats with Du", 1800],
    [1393, "C", "Pinkie Pie Eats Patty-cakes", 1700],
    [1389, "F", "Bicolored Segments", 2600],
    [1388, "E", "Uncle Bogdan and Projections", 2700],
    [1386, "B", "Mixture", 2900],
    [1383, "D", "Rearrange", 2800],
    [1383, "A", "String Transformation 1", 1700],
    [1381, "E", "Origami", 3300],
    [1381, "C", "Mastermind", 2500],
    [1380, "C", "Create The Teams", 1400],
    [1379, "D", "New Passenger Trams", 2300],
    [1379, "C", "Choosing flowers", 2000],
    [1375, "E", "Inversion SwapSort", 2500],
    [1375, "D", "Replace by MEX", 1900],
    [1374, "F", "Cyclic Shifts Sorting", 2400],
    [1374, "E2", "Reading Books (hard version)", 2500],
    [1374, "E1", "Reading Books (easy version)", 1600],
    [1374, "D", "Zero Remainder Array", 1400],
    [1371, "E2", "Asterism (Hard Version)", 2300],
    [1371, "E1", "Asterism (Easy Version)", 1900],
    [1369, "E", "DeadLee", 2400],
    [1369, "C", "RationalLee", 1400],
    [1367, "F2", "Flying Sort (Hard Version)", 2400],
    [1367, "D", "Task On The Board", 1800],
    [1365, "F", "Swaps Again", 2100],
    [1361, "B", "Johnny and Grandmaster", 1900],
    [1361, "A", "Johnny and Contribution", 1700],
    [1360, "C", "Similar Pairs", 1100],
    [1360, "B", "Honest Coach", 800],
    [1358, "B", "Maria Breaks the Self-isolation", 1000],
    [1355, "E", "Restorer Distance", 2100],
    [1355, "B", "Young Explorers", 1200],
    [1354, "F", "Summoning Minions", 2500],
    [1353, "D", "Constructing the Array", 1600],
    [1353, "B", "Two Arrays And Swaps", 800],
    [1348, "C", "Phoenix and Distribution", 1600],
    [1348, "B", "Phoenix and Beauty", 1400],
    [1346, "C", "Spring Cleaning", 1600],
    [1344, "A", "Hilbert's Hotel", 1600],
    [1343, "E", "Weights Distributing", 2100],
    [1342, "D", "Multiple Testcases", 1900],
    [1339, "B", "Sorted Adjacent Differences", 1200],
    [1336, "B", "Xenia and Colorful Gems", 1700],
    [1336, "A", "Linova and Kingdom", 1600],
    [1335, "C", "Two Teams Composing", 1100],
    [1334, "B", "Middle Class", 1100],
    [1333, "F", "Kate and imperfection", 2200],
    [1333, "D", "Challenges in school №41", 2100],
    [1324, "D", "Pair of Topics", 1400],
    [1322, "B", "Present", 2100],
    [1320, "C", "World of Darkraft: Battle for Azathoth", 2000],
    [1320, "A", "Journey Planning", 1400],
    [1316, "E", "Team Building", 2300],
    [1316, "B", "String Modification", 1400],
    [1312, "B", "Bogosort", 1000],
    [1311, "F", "Moving Points", 1900],
    [1311, "B", "WeirdSort", 1200],
    [1310, "A", "Recommendations", 1700],
    [1307, "D", "Cow and Fields", 1900],
    [1305, "A", "Kuroni and the Gifts", 800],
    [1304, "C", "Air Conditioner", 1500],
    [1300, "B", "Assigning to Classes", 1000],
    [1297, "F", "Movie Fan", null],
    [1297, "D", "Bonus Distribution ", null],
    [1297, "B", "Cartoons", null],
    [1296, "F", "Berland Beauty", 2100],
    [1296, "E1", "String Coloring (easy version)", 1800],
    [1296, "D", "Fight with Monsters", 1500],
    [1294, "B", "Collecting Packages", 1200],
    [1286, "A", "Garland", 1800],
    [1285, "E", "Delete a Segment", 2300],
    [1284, "E", "New Year and Castle Construction", 2500],
    [1284, "D", "New Year and Conference", 2100],
    [1284, "B", "New Year and Ascent Sequence", 1400],
    [1282, "C", "Petya and Exam", 1800],
    [1282, "B2", "K for the Price of One (Hard Version)", 1600],
    [1282, "B1", "K for the Price of One (Easy Version)", 1400],
    [1272, "A", "Three Friends", 900],
    [1271, "D", "Portals", 2100],
    [1270, "D", "Strange Device", 1900],
    [1269, "B", "Modulo Equality", 1500],
    [1267, "I", "Intriguing Selection", 2600],
    [1260, "D", "A Game with Traps", 1900],
    [1257, "D", "Yet Another Monster Killing Problem", 1700],
    [1257, "C", "Dominated Subarray", 1200],
    [1256, "F", "Equalizing Two Strings", 2000],
    [1256, "E", "Yet Another Division Into Teams", 2000],
    [1253, "E", "Antenna Coverage", 2200],
    [1253, "D", "Harmonious Graph", 1700],
    [1253, "C", "Sweets Eating", 1500],
    [1251, "D", "Salary Changing", 1900],
    [1249, "D2", "Too Many Segments (hard version)", 1800],
    [1248, "B", "Grow The Tree", 900],
    [1244, "E", "Minimizing Difference", 2000],
    [1242, "B", "0-1 MST", 1900],
    [1238, "G", "Adilbek and the Watering System", 2700],
    [1238, "B", "Kill `Em All", 1300],
    [1237, "C2", "Balanced Removals (Harder)", 1900],
    [1237, "B", "Balanced Tunnel", 1300],
    [1223, "E", "Paint the Tree", 2100],
    [1221, "F", "Choose a Square", 2400],
    [1220, "A", "Cards", 800],
    [1216, "B", "Shooting", 900],
    [1214, "F", "Employment", 2700],
    [1214, "E", "Petya and Construction Set", 2000],
    [1213, "G", "Path Queries", 1800],
    [1213, "D2", "Equalizing by Division (hard version)", 1600],
    [1211, "C", "Ice Cream", 1700],
    [1209, "E2", "Rotate Columns (hard version)", 2500],
    [1209, "E1", "Rotate Columns (easy version)", 2000],
    [1206, "A", "Choose Two Numbers", 800],
    [1203, "E", "Boxers", 1500],
    [1201, "C", "Maximum Median", 1400],
    [1198, "C", "Matching vs  Independent Set", 2000],
    [1198, "B", "Welfare State", 1600],
    [1198, "A", "MP3", 1600],
    [1197, "E", "Culture Code", 2300],
    [1197, "C", "Array Splitting", 1400],
    [1197, "A", "DIY Wooden Ladder", 900],
    [1196, "F", "K-th Path", 2200],
    [1195, "F", "Geometers Anonymous Club", 2500],
    [1194, "E", "Count The Rectangles", 2200],
    [1190, "D", "Tokitsukaze and Strange Rectangle", 2000],
    [1189, "B", "Number Circle", 1100],
    [1187, "D", "Subarray Sorting", 2400],
    [1185, "C1", "Exam in BerSU (easy version)", 1200],
    [1184, "B2", "The Doctor Meets Vader (Medium)", 2200],
    [1184, "B1", "The Doctor Meets Vader (Easy)", 1400],
    [1183, "G", "Candy Box (hard version)", 2000],
    [1183, "F", "Topforces Strikes Back", 2100],
    [1183, "D", "Candy Box (easy version)", 1400],
    [1181, "E2", "A Story of One Country (Hard)", 3000],
    [1181, "E1", "A Story of One Country (Easy)", 2500],
    [1181, "D", "Irrigation", 2200],
    [1176, "F", "Destroy it!", 2100],
    [1176, "D", "Recover it!", 1800],
    [1175, "D", "Array Splitting", 1900],
    [1174, "B", "Ehab Is an Odd Person", 1200],
    [1174, "A", "Ehab Fails to Be Thanos", 1000],
    [1167, "F", "Scalar Queries", 2300],
    [1166, "C", "A Tale of Two Lands", 1500],
    [1165, "E", "Two Arrays and Sum of Functions", 1600],
    [1165, "B", "Polycarp Training", 1000],
    [1158, "C", "Permutation recovery", 2100],
    [1158, "A", "The Party and Sweets", 1500],
    [1156, "C", "Match Points", 2000],
    [1156, "B", "Ugly Pairs", 1800],
    [1155, "A", "Reverse a Substring", 1000],
    [1154, "F", "Shovels Shop", 2100],
    [1154, "E", "Two Teams", 1800],
    [1151, "D", "Stas and the Queue at the Buffet", 1600],
    [1148, "E", "Earth Wind and Fire", 2300],
    [1148, "D", "Dirty Deeds Done Dirt Cheap", 1800],
    [1148, "C", "Crazy Diamond", 1700],
    [1144, "C", "Two Shuffled Sequences", 1000],
    [1144, "B", "Parity Alternated Deletions", 900],
    [1140, "C", "Playlist", 1600],
    [1137, "A", "Skyscrapers", 1600],
    [1136, "C", "Nastya Is Transposing Matrices", 1500],
    [1133, "E", "K Balanced Teams", 1800],
    [1133, "C", "Balanced Team", 1200],
    [1132, "B", "Discounts", 900],
    [1131, "C", "Birthday", 1200],
    [1129, "C", "Morse Code", 2400],
    [1121, "A", "Technogoblet of Fire", 1100],
    [1119, "D", "Frets On Fire", 1800],
    [1119, "B", "Alyona and a Narrow Fridge", 1300],
    [1117, "B", "Emotes", 1000],
    [1114, "B", "Yet Another Array Partitioning Task", 1500],
    [1110, "E", "Magic Stones", 2200],
    [1110, "B", "Tape", 1400],
    [1107, "F", "Vasya and Endless Credits", 2600],
    [1107, "C", "Brutality", 1300],
    [1106, "C", "Lunar New Year and Number Division", 900],
    [1102, "E", "Monotonic Renumeration", 1700],
    [1102, "B", "Array K-Coloring", 1400],
    [1101, "C", "Division and Union", 1500],
    [1093, "B", "Letters Rearranging", 900],
    [1092, "B", "Teams Forming", 800],
    [1091, "E", "New Year and the Acquaintance Estimation", 2400]
];
let Matrixq = [
    [1557, "C", "Moamen and XOR", 1700],
    [1540, "E", "Tasty Dishes", 3500],
    [1538, "E", "Funny Substrings", 2100],
    [1513, "C", "Add One", 1600],
    [1511, "F", "Chainword", 2700],
    [1474, "F", "1 2 3 4 ...", 3000],
    [1458, "C", "Latin Square", 2700],
    [1427, "E", "Xum", 2500],
    [1411, "G", "No Game No Life", 2700],
    [1402, "C", "Star Trek", 2600],
    [1380, "F", "Strange Addition", 2600],
    [1375, "I", "Cubic Lattice", 3500],
    [1344, "F", "Piet's Palette", 3200],
    [1335, "F", "Robots on a Grid", 2200],
    [1332, "E", "Height All the Same", 2100],
    [1286, "D", "LCC", 3100],
    [1266, "H", "Red-Blue Graph", 3400],
    [1252, "K", "Addition Robot", 2100],
    [1197, "F", "Coloring Game", 2700],
    [1188, "B", "Count Pairs", 2300],
    [1184, "D2", "Parallel Universes (Hard)", 3100],
    [1182, "E", "Product Oriented Recurrence", 2300],
    [1152, "F2", "Neko Rules the Catniverse (Large Version)", 3000],
    [1152, "F1", "Neko Rules the Catniverse (Small Version)", 2800],
    [1151, "F", "Sonya and Informatics", 2300],
    [1117, "D", "Magic Gems", 2100],
    [1106, "F", "Lunar New Year and a Recursive Sequence", 2400],
    [1101, "G", "(Zero XOR Subset)-less", 2300],
    [1025, "E", "Colored Cubes", 2700],
    [1023, "E", "Down or Right", 2100],
    [1012, "B", "Chemical table", 1900],
    [989, "E", "A Trance of Nightfall", 2700],
    [959, "F", "Mahmoud and Ehab and yet another xor task", 2400],
    [954, "F", "Runner's Problem", 2100],
    [946, "F", "Fibonacci String Subsequences", 2400],
    [923, "E", "Perpetual Subtraction", 3100],
    [917, "D", "Stranger Trees", 2600],
    [917, "C", "Pollywog", 2900],
    [891, "E", "Lust", 3000],
    [865, "G", "Flowers and Chocolate", 3300],
    [852, "B", "Neural Network country", 2000],
    [837, "F", "Prefix Sums", 2400],
    [832, "E", "Vasya and Shifts", 2600],
    [821, "E", "Okabe and El Psy Kongroo", 2100],
    [780, "F", "Axel and Marston in Bitland", 2400],
    [750, "E", "New Year and Old Subsequence", 2600],
    [736, "D", "Permutations", 2800],
    [718, "C", "Sasha and Array", 2300],
    [717, "D", "Dexterina’s Lab", 1900],
    [696, "D", "Legen...", 2500],
    [696, "C", "PLEASE", 2000],
    [691, "E", "Xor-sequences", 1900],
    [662, "A", "Gambling Nim", 2400],
    [632, "F", "Magic Matrix", 2400],
    [621, "E", "Wet Shark and Blocks", 2000],
    [618, "G", "Combining Slimes", 3300],
    [593, "E", "Strange Calculation and Cats", 2400],
    [582, "B", "Once Again...", 1900],
    [578, "F", "Mirror Box", 3200],
    [576, "D", "Flights for Regular Customers", 2700],
    [575, "A", "Fibonotci", 2700],
    [551, "D", "GukiZ and Binary Operations", 2100],
    [514, "E", "Darth Vader and Tree", 2200],
    [506, "E", "Mr. Kitayuta's Gift", 3000],
    [498, "E", "Stairs and Lines", 2700],
    [497, "E", "Subsequences Return", 2900],
    [485, "A", "Factory", 1400],
    [472, "F", "Design Tutorial: Change the Goal", 2700],
    [453, "D", "Little Pony and Elements of Harmony", 3000],
    [446, "E", "DZY Loves Bridges", 3100],
    [446, "D", "DZY Loves Games", 2800],
    [392, "C", "Yet Another Number Sequence", null],
    [385, "E", "Bear in the Field", 2300],
    [351, "C", "Jeff and Brackets", 2500],
    [348, "D", "Turtles", 2500],
    [337, "C", "Quiz", 1600],
    [267, "C", "Berland Traffic", 2700],
    [226, "C", "Anniversary", 2400],
    [225, "C", "Barcode", 1700],
    [222, "E", "Decoding Genome", 1900],
    [193, "E", "Fibonacci Number", 2900],
    [193, "C", "Hamming Distance", 2400],
    [177, "G2", "Fibonacci Strings", 2600],
    [167, "E", "Wizards and Bets", 2900],
    [166, "E", "Tetrahedron", 1500],
    [147, "B", "Smile House", 2500],
    [113, "D", "Museum", 2700],
    [107, "D", "Crime Management", 2400],
    [93, "D", "Flags", 2500],
    [86, "E", "Long sequence", 2700]
];
let Binaryq = [
    [1560, "E", "Polycarp and String Transformation", 1800],
    [1554, "C", "Mikasa", 1800],
    [1552, "H", "Guess the Perimeter", 3300],
    [1552, "F", "Telepanting", 2200],
    [1551, "E", "Fixed Points", 2000],
    [1551, "B2", "Wonderful Coloring - 2", 1400],
    [1550, "F", "Jumping Around", 2700],
    [1550, "E", "Stringforces", 2500],
    [1550, "D", "Excellent Arrays", 2300],
    [1548, "B", "Integers Have Friends", 1800],
    [1547, "F", "Array Stabilization (GCD version)", 1900],
    [1540, "D", "Inverse Inversions", 3200],
    [1539, "E", "Game with Cards", 2500],
    [1539, "D", "PriceFixed", 1600],
    [1538, "G", "Gift Set", 2100],
    [1538, "F", "Interesting Function", 1500],
    [1538, "C", "Number of Pairs", 1300],
    [1537, "E2", "Erase and Extend (Hard Version)", 2200],
    [1537, "E1", "Erase and Extend (Easy Version)", 1600],
    [1535, "F", "String Distance", 3000],
    [1535, "E", "Gold Transfer", 2200],
    [1535, "C", "Unstable String", 1400],
    [1533, "F", "Binary String Partition", null],
    [1533, "E", "Chess Team Forming", null],
    [1531, "E3", "Сортировка слиянием", null],
    [1530, "C", "Pursuit", 1200],
    [1527, "E", "Partition Game", 2500],
    [1521, "E", "Nastia and a Beautiful Matrix", 2700],
    [1520, "F2", "Guess the K-th Zero (Hard version)", 2200],
    [1520, "F1", "Guess the K-th Zero (Easy version)", 1600],
    [1517, "E", "Group Photo", 2500],
    [1516, "D", "Cut", 2100],
    [1515, "I", "Phoenix and Diamonds", 3400],
    [1514, "E", "Baby Ehab's Hyper Apartment", 2700],
    [1514, "D", "Cut and Stick", 2000],
    [1508, "B", "Almost Sorted", 1800],
    [1503, "C", "Travelling Salesman Problem", 2200],
    [1500, "E", "Subset Trick", 3300],
    [1500, "B", "Two chandeliers", 2200],
    [1498, "B", "Box Fitting", 1300],
    [1494, "C", "1D Sokoban", 1900],
    [1493, "C", "K-beautiful Strings", 2000],
    [1492, "C", "Maximum width", 1500],
    [1491, "F", "Magnets", 2700],
    [1490, "G", "Old Floppy Drive ", 1900],
    [1490, "F", "Equalize the Array", 1500],
    [1490, "E", "Accidental Victory", 1400],
    [1490, "C", "Sum of Cubes", 1100],
    [1488, "F", "Dogecoin", 2300],
    [1488, "D", "Problemsolving Marathon", 1900],
    [1488, "C", "Two Policemen", 1900],
    [1487, "D", "Pythagorean Triples", 1500],
    [1486, "E", "Paired Payment", 2200],
    [1486, "D", "Max Median", 2100],
    [1486, "C2", "Guessing the Greatest (hard version)", 1900],
    [1486, "C1", "Guessing the Greatest (easy version)", 1600],
    [1486, "B", "Eastern Exhibition", 1500],
    [1485, "C", "Floor and Mod", 1700],
    [1482, "G", "Vabank", 3200],
    [1479, "D", "Odd Mineral Resource", 2900],
    [1479, "A", "Searching Local Minimum", 1700],
    [1476, "F", "Lanterns", 3000],
    [1476, "B", "Inflation", 1300],
    [1476, "A", "K-divisible Sum", 1000],
    [1475, "D", "Cleaning the Phone", 1800],
    [1474, "B", "Different Divisors", 1000],
    [1472, "E", "Correct Placement", 1700],
    [1470, "E", "Strange Permutation", 3200],
    [1470, "C", "Strange Shuffle", 2500],
    [1470, "A", "Strange Birthday Party", 1300],
    [1469, "F", "Power Sockets", 2600],
    [1468, "L", "Prime Divisors Selection", 2700],
    [1468, "G", "Hobbits", 2500],
    [1468, "D", "Firecrackers", 1700],
    [1466, "I", "The Riddle of the Sphinx", 3400],
    [1463, "D", "Pairs", 1900],
    [1463, "A", "Dungeon", 1100],
    [1462, "F", "The Treasure of The Segments", 1800],
    [1462, "E2", "Close Tuples (hard version)", 1700],
    [1462, "E1", "Close Tuples (easy version)", 1500],
    [1461, "D", "Divide and Summarize", 1600],
    [1454, "F", "Array Partition", 2100],
    [1453, "E", "Dog Snacks", 2300],
    [1452, "B", "Toy Blocks", 1400],
    [1450, "D", "Rating Compression", 1800],
    [1446, "F", "Line Distance", 3200],
    [1446, "C", "Xor Tree", 2100],
    [1443, "C", "The Delivery Dilemma", 1400],
    [1442, "E", "Black, White and Grey Tree", 3000],
    [1439, "C", "Greedy Shopping", 2600]
];
let bitmaskq = [
    [1560, "F2", "Nearest Beautiful Number (hard version)", 2100],
    [1560, "F1", "Nearest Beautiful Number (easy version)", 1900],
    [1559, "A", "Mocha and Math", 900],
    [1557, "C", "Moamen and XOR", 1700],
    [1554, "C", "Mikasa", 1800],
    [1554, "B", "Cobb", 1700],
    [1553, "H", "XOR and Distance", 2900],
    [1553, "C", "Penalty", 1200],
    [1552, "G", "A Serious Referee", 3000],
    [1552, "D", "Array Differentiation", 1800],
    [1550, "E", "Stringforces", 2500],
    [1548, "D1", "Gregor and the Odd Cows (Easy)", 2300],
    [1547, "D", "Co-growing Sequence", 1300],
    [1543, "E", "The Final Pursuit", 2700],
    [1543, "D1", "RPD and Rap Sheet (Easy Version)", 1700],
    [1543, "C", "Need for Pink Slips", 1900],
    [1533, "H", "Submatrices", null],
    [1530, "F", "Bingo", 2600],
    [1527, "A", "And Then There Were K", 800],
    [1523, "F", "Favorite Game", 3300],
    [1523, "D", "Love-Hate", 2400],
    [1519, "F", "Chests and Keys", 3200],
    [1516, "C", "Baby Ehab Partitions Again", 1700],
    [1516, "B", "AGAGA XOOORRR", 1500],
    [1515, "H", "Phoenix and Bits", 3500],
    [1514, "B", "AND 0, Sum Big", 1200],
    [1513, "B", "AND Sequences", 1400],
    [1511, "G", "Chips on a Board", 2700],
    [1508, "C", "Complete the MST", 2500],
    [1500, "C", "Matrix Sorting", 2600],
    [1498, "F", "Christmas Game", 2500],
    [1498, "B", "Box Fitting", 1300],
    [1497, "D", "Genius", 2500],
    [1494, "B", "Berland Crossword", 1400],
    [1494, "A", "ABC String", 900],
    [1493, "F", "Enchanted Matrix", 2600],
    [1493, "E", "Enormous XOR", 2600],
    [1492, "D", "Genius's Gambit", 1900],
    [1491, "D", "Zookeeper and The Infinite Zoo", 1800],
    [1479, "D", "Odd Mineral Resource", 2900],
    [1479, "C", "Continuous City", 2500],
    [1476, "E", "Pattern Matching", 2300],
    [1470, "B", "Strange Definition", 1900],
    [1469, "E", "A Bit Similar", 2400],
    [1466, "F", "Euclid's nightmare", 2100],
    [1466, "E", "Apollo versus Pan", 1800],
    [1463, "F", "Max Correct Set", 3100],
    [1463, "B", "Find The Array", 1400],
    [1451, "E2", "Bitwise Queries (Hard Version)", 2300],
    [1451, "E1", "Bitwise Queries (Easy Version)", 2000],
    [1450, "G", "Communism", 3500],
    [1446, "C", "Xor Tree", 2100],
    [1439, "E", "Cheat and Win", 3500],
    [1438, "E", "Yurii Can Do Everything", 2500],
    [1438, "D", "Powerful Ksenia", 2200],
    [1430, "G", "Yet Another DAG Problem", 2600],
    [1427, "E", "Xum", 2500],
    [1423, "J", "Bubble Cup hypothesis", 2400],
    [1423, "I", "Lookup Tables", 3000],
    [1421, "A", "XORwice", 800],
    [1420, "B", "Rock and Lever", 1200],
    [1416, "C", "XOR Inverse", 2000],
    [1415, "D", "XOR-gun", 2000],
    [1411, "G", "No Game No Life", 2700],
    [1411, "E", "Poman Numbers", 2300],
    [1401, "F", "Reverse and Swap", 2400],
    [1400, "G", "Mercenaries", 2600],
    [1398, "G", "Running Competition", 2600],
    [1395, "C", "Boboniu and Bit Operations", 1600],
    [1392, "G", "Omkar and Pies", 2900],
    [1392, "E", "Omkar and Duck", 2100],
    [1391, "D", "505", 2000],
    [1386, "C", "Joker", 2800],
    [1385, "D", "a-Good String", 1500],
    [1383, "C", "String Transformation 2", 3100],
    [1383, "B", "GameGame", 1900],
    [1368, "D", "AND, OR and square sum", 1700],
    [1365, "G", "Secure Password", 2800],
    [1364, "E", "X-OR", 2700],
    [1362, "C", "Johnny and Another Rating Drop", 1400],
    [1362, "B", "Johnny and His Hobbies", 1200],
    [1361, "C", "Johnny and Megan's Necklace", 2500],
    [1360, "H", "Binary Median", 2100],
    [1360, "F", "Spy-string", 1700],
    [1342, "F", "Make It Ascending", 3000],
    [1340, "B", "Nastya and Scoreboard", 1700],
    [1338, "C", "Perfect Triples", 2200],
    [1338, "B", "Edge Weight Assignment", 1800],
    [1336, "E2", "Chiori and Doll Picking (hard version)", 3500],
    [1336, "E1", "Chiori and Doll Picking (easy version)", 2700]
];
let user_rating = 0;
let countfriends = 0;
let friendlist = [];
let remstatus = undefined;
let colorarr = ["#b87333", "#de31db", "blue", "red", "#0f8c16", "#e371df", "#f2cc35", "#211f21"];
let ratingobj = [
    ["Element", "Rating", {
        role: "style"
    }]
];
let frirat;
let friendsbool = 0;
let friendsinpu = document.getElementById("friendsinput");
let friendsaddbtn = document.getElementById("addfri");
let friendsdiv = document.getElementById("adddiv");
google.charts.load('current', {
    packages: ['corechart', 'line']
});

function drawChart() {
    // console.log(JSON.stringify(ratingobj));
    var data = google.visualization.arrayToDataTable(ratingobj);
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        title: "Rating Between Your Friends",
        width: 500,
        height: 400,
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}

function drawBackgroundColor(res) {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'contestNo');
    data.addColumn('number', 'Rating');
    data.addRows(res);
    var options = {
        hAxis: {
            title: 'No of Contests'
        },
        vAxis: {
            title: 'Rating'
        },
        backgroundColor: '#f1f8e9'
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
let sofun = function() {
    se.classList.remove("d-none");
    so.classList.add("active");
    random.classList.add("d-none");
    friends.classList.add("d-none");
    contests.classList.add("d-none");
    main.classList.add("d-none");
    nrandom.classList.remove("active");
    nfriends.classList.remove("active");
    ncontests.classList.remove("active");
    hom.classList.remove("active");
};

let homfun = function() {
    if (user_id === null) {
        alert("First_Set the user name");
        return;
    }
    main.classList.remove("d-none");
    hom.classList.add("active");
    random.classList.add("d-none");
    friends.classList.add("d-none");
    contests.classList.add("d-none");
    se.classList.add("d-none");
    nrandom.classList.remove("active");
    nfriends.classList.remove("active");
    ncontests.classList.remove("active");
    so.classList.remove("active");
};

function profile(x) {
    let fun = {
        method: "GET"
    }
    fetch("https://codeforces.com/api/user.info?handles=" + x + ";", fun)
        .then(function(i) {
            return i.json();
        })
        .then(function(i) {
            console.log(i);
            mainname.textContent = x;
            mainname.href = "https://codeforces.com/profile/" + x;
            if (i.result[0].maxRating === undefined) mainmrating.textContent = "  " + 0;
            else
                mainmrating.textContent = "  " + i.result[0].maxRating;
            if (i.result[0].rating === undefined) {
                maincrating.textContent = " " + 0;
                user_rating = 0;
            } else {
                maincrating.textContent = " " + i.result[0].rating;
                user_rating = i.result[0].rating;
                ratingobj.push([x, user_rating, "#912125"]);
            }
            mainfriends.textContent = " " + i.result[0].friendOfCount;

            avtar.src = i.result[0].avatar;
            let nloo = document.getElementById("nlogo");
            nloo.href = "https://codeforces.com/profile/sasidhar_msr";
            let Fro = document.getElementById("Fro");
            if (i.result[0].city != undefined)
                Fro.textContent = "From:  " + i.result[0].city;
        });
}

function local_storage() {
    let item = localStorage.getItem("Msrcodeforces");
    let dat = localStorage.getItem("MsrSubmissions");
    let rat = localStorage.getItem("MsrContest");
    let rating = JSON.parse(rat);
    let fri = localStorage.getItem("MsrFriends");
    let friends = JSON.parse(fri);
    let data = JSON.parse(dat);
    if (item === null) {
        sofun();
    } else {
        user_id = item;
        profile(item);
        if (data.length === 0) {
            homfun();
            LastSubmission.textContent = "Not-Yet";
        } else
            design_home(data);
        console.log("HI");
        contest(user_id);
        if (friends !== null) {
            rebuildfriends(friends);

        }
    }
}
local_storage();
so.onclick = sofun;
hom.onclick = homfun;
nrandom.onclick = function() {
    if (user_id === null) {
        alert("First_Set the user name");
        return;
    }
    random.classList.remove("d-none");
    nrandom.classList.add("active");
    main.classList.add("d-none");
    friends.classList.add("d-none");
    contests.classList.add("d-none");
    se.classList.add("d-none");
    so.classList.remove("active");
    nfriends.classList.remove("active");
    ncontests.classList.remove("active");
    hom.classList.remove("active");
};
nfriends.onclick = function() {
    if (user_id === null) {
        alert("First_Set the user name");
        return;
    }
    friends.classList.remove("d-none");
    nfriends.classList.add("active");
    main.classList.add("d-none");
    random.classList.add("d-none");
    contests.classList.add("d-none");
    se.classList.add("d-none");
    nrandom.classList.remove("active");
    so.classList.remove("active");
    ncontests.classList.remove("active");
    hom.classList.remove("active");
};
ncontests.onclick = function() {
    if (user_id === null) {
        alert("First_Set the user name");
        return;
    }
    contests.classList.remove("d-none");
    ncontests.classList.add("active");
    main.classList.add("d-none");
    random.classList.add("d-none");
    friends.classList.add("d-none");
    se.classList.add("d-none");
    nrandom.classList.remove("active");
    nfriends.classList.remove("active");
    so.classList.remove("active");
    hom.classList.remove("active");
};

function design_home(data) {

    console.log(user_id);
    mai.innerHTML = "";
    let da = new Date(0);
    da.setUTCSeconds(data[0][0]);
    let mont = da.getMonth() + 1;
    let u = `${da.getDate()}-${mont}-${da.getFullYear()}`;
    LastSubmission.textContent = u;
    for (let i of data) {
        let dive = document.createElement("div");
        dive.classList.add("col-12", "col-lg-3");
        mai.appendChild(dive);
        let card = document.createElement("div");
        card.classList.add("wcu-card", "p-3", "mb-3", "d-flex", "flex-column");
        dive.appendChild(card);
        let hed = document.createElement("a");
        hed.classList.add("wcu-card-title");
        hed.target = "_blank";
        hed.textContent = i[1];
        hed.href = `https://codeforces.com/contest/${i[2].contestId}/problem/${i[2].index}`;
        card.appendChild(hed);
        let sol = document.createElement("a");
        sol.classList.add("wcu-card-description");
        sol.textContent = "Your solution";
        sol.target = "_blank";
        sol.href = `https://codeforces.com/contest/${i[2].contestId}/submission/${i[3]}`;
        card.appendChild(sol);
        let ratti = document.createElement("p");
        ratti.textContent = "Difficulty :" + i[2].rating;
        ratti.classList.add("wcu-title");
        card.appendChild(ratti);
        //   dat.textContent="Date :"+i[0].getDate()+"-"+i[0].getMonth()+"-"+i[0].getYear();
    }
    console.log(mai);
    homfun();
}

function home(x) {
    localStorage.setItem("Msrcodeforces", x);
    let fun = {
        method: "GET"
    };
    let url = "https://codeforces.com/api/user.status?handle=" + x + "&from=1&count=300";
    fetch(url, fun)
        .then(function(i) {
            return i.json();
        })
        .then(function(i) {
            console.log(i);

            let data = [];
            for (let j of i.result) {
                if (j.verdict === "OK") {
                    let d = j.creationTimeSeconds;
                    let date = new Date();
                    date.setUTCSeconds(d);
                    data.push([d, j.problem.name, j.problem, j.id]);
                }
            }
            if (data.length === 0) {
                profile(x);
                homfun();
                localStorage.setItem("MsrSubmissions", JSON.stringify(data));
                design_home(data);
                LastSubmission.textContent = "Not-Yet";
                return;
            }

            function getUniqueListBy(arr, key) {
                return [...new Map(arr.map(item => [item[key], item])).values()];
            }
            let unique_data = getUniqueListBy(data, 1);
            localStorage.setItem("MsrSubmissions", JSON.stringify(unique_data));
            design_home(unique_data);
            profile(x);
        });

}

function contest(o) {
    fun = {
        method: "GET"
    };
    fetch("https://codeforces.com/api/user.rating?handle=" + o, fun)
        .then((x) => {
            return x.json();
        })
        .then((x) => {
            let j = 1;
            let rating = [
                [0, 0]
            ];
            for (let i of x.result) {
                rating.push([j, i.newRating]);
                j += 1;
            }
            j--;
            totalc.textContent = "Total Contests: " + j;
            localStorage.setItem("MsrContest", JSON.stringify(rating));
            google.charts.setOnLoadCallback(drawBackgroundColor(rating));
        });
}

function check(i) {
    let fun = {
        method: "GET"
    }
    fetch("https://codeforces.com/api/user.info?handles=" + i, fun)
        .then(function(x) {
            return x.json();
        }).then(function(x) {
            if (x.status === "OK") {
                user_id = i;
                user_rating = x.result[0].rating;
                home(i);
                contest(i);
            } else
                error.textContent = "Wrong input";

        });
}

remfri.onclick = function() {
    if (remstatus !== undefined) {
        let dele = document.getElementById(remstatus);
        friendsdiv.removeChild(dele);
        remfri.classList.toggle("d-none");
        let id;
        for (let j = 0; j < friendlist.length; j++) {
            let z = "divid" + friendlist[j];
            if (z == remstatus) {
                id = j;
                break;
            }
        }
        let uid;
        for (let j = 0; j < ratingobj.length; j++) {
            let z = "divid" + ratingobj[0];
            if (z == remstatus) {
                uid = j;
                break;
            }
        }
        ratingobj.splice(uid, 1);
        friendlist.splice(id, 1);
        ratingquery();
        countfriends--;
    }
    localStorage.setItem("MsrFriends", JSON.stringify(friendlist));
    remstatus = undefined;
    ratingquery();
}
google.charts.load("current", {
    packages: ['corechart']
});


function giverating(x) {
    //console.log(x);
    let fun = {
        method: "GET"
    }
    fetch("https://codeforces.com/api/user.info?handles=" + friendlist[x] + ";", fun)
        .then(function(i) {
            return i.json();
        })
        .then(function(i) {
            frirat = parseInt(i.result[0].rating);
            console.log(ratingobj);
            ratingobj.push([friendlist[x], frirat, colorarr[x]]);
            google.charts.setOnLoadCallback(drawChart);
        });
}

function ratingquery() {
    for (let i = 0; i < friendlist.length; i++) {
        giverating(i);
    }
}

function removef(i) {
    remfri.classList.toggle("d-none");
    remstatus = i;
}

function funfriends(i) {
    if (i === user_id) {
        err.textContent = "Dont'be too smart";
        return;
    }
    countfriends = friendlist.length;
    if (friendlist.length == 8) {
        err.textContent = "sorry Friens limit exceded";
        return;
    }
    for (let j = 0; j < countfriends; j++) {
        if (friendlist[j] == i) {
            friendsinput.value = "";
            err.textContent = "Already_Exists";
            return;
        }
    }
    friendsinput.value = "";
    let dive = document.createElement("div");
    dive.classList.add("col-6", "col-lg-4", "text-center", "mb-3");
    dive.id = "divid" + i;
    let inb = document.createElement("button");
    inb.classList.add("joke-btn");
    inb.textContent = i;
    inb.onclick = function() {
        removef(dive.id);
        err.textContent = "";
    }
    dive.appendChild(inb);
    friendlist.push(i);
    console.log(friendlist.length);
    friendsdiv.appendChild(dive);
    countfriends++;
    localStorage.setItem("MsrFriends", JSON.stringify(friendlist));
    if (friendsbool) {
        giverating(friendlist.length - 1);
    }
}

function rebuildfriends(i) {
    // console.log("$$");
    for (let j of i) {
        funfriends(j);
    }
    ratingquery();
    friendsbool = 1;
}

function chec(i) {
    console.log("&");
    let fun = {
        method: "GET"
    }
    fetch("https://codeforces.com/api/user.info?handles=" + i, fun)
        .then(function(x) {
            return x.json();
        }).then(function(x) {
            if (x.status === "OK") {
                err.textContent = "";
                funfriends(i);
            } else
                err.textContent = "Wrong input";

        });
}
let spinner = document.getElementById("spinner");
let question = document.getElementById("question");
let qtext = document.getElementById("random-p");
let qlink = document.getElementById("lin");
friendsaddbtn.onclick = function() {
    let user_name = friendsinput.value;
    if (user_name === "") {
        //  console.log("*");
        err.textContent = "Requeired*";
        return;
    }
    chec(user_name);

}

function randomq(x) {
    question.classList.remove("d-none");
    qtext.textContent = "Your " + x + " question " + "is Ready";
    qlink.textContent = "Click";
    qlink.href = "https://codeforces.com/problemset?tags=" + x;
}

function dp() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + dpq[u][2];
    ranrat.textContent = "Difficulty: " + dpq[u][3];
    qlink.textContent = "Click";
    console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + dpq[u][0] + "/" + dpq[u][1];
}

function gre() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + greedyq[u][2];
    ranrat.textContent = "Difficulty: " + greedyq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + greedyq[u][0] + "/" + greedyq[u][1];
}

function gra() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + graphq[u][2];
    ranrat.textContent = "Difficulty: " + graphq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + graphq[u][0] + "/" + graphq[u][1];
}

function has() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 140;
    qtext.textContent = "Your question is " + Hashingq[u][2];
    ranrat.textContent = "Difficulty: " + Hashingq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + Hashingq[u][0] + "/" + Hashingq[u][1];
}

function mat() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 140;
    qtext.textContent = "Your question is " + Mathq[u][2];
    ranrat.textContent = "Difficulty: " + Mathq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + Mathq[u][0] + "/" + Mathq[u][1];
}

function bru() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 140;
    qtext.textContent = "Your question is " + bruteq[u][2];
    ranrat.textContent = "Difficulty: " + bruteq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + bruteq[u][0] + "/" + bruteq[u][1];
}

function tre() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + treeq[u][2];
    ranrat.textContent = "Difficulty: " + treeq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + treeq[u][0] + "/" + treeq[u][1];
}

function sor() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + Sortingq[u][2];
    ranrat.textContent = "Difficulty: " + Sortingq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + Sortingq[u][0] + "/" + Sortingq[u][1];
}

function matr() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 87;
    qtext.textContent = "Your question is " + Matrixq[u][2];
    ranrat.textContent = "Difficulty: " + Matrixq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + Matrixq[u][0] + "/" + Matrixq[u][1];
}

function bs() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 87;
    qtext.textContent = "Your question is " + Binaryq[u][2];
    ranrat.textContent = "Difficulty: " + Binaryq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + Binaryq[u][0] + "/" + Binaryq[u][1];
}

function bit() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 87;
    qtext.textContent = "Your question is " + bitmaskq[u][2];
    ranrat.textContent = "Difficulty: " + bitmaskq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + bitmaskq[u][0] + "/" + bitmaskq[u][1];
}

function str() {
    question.classList.remove("d-none");
    let u = Math.ceil(Math.random() * 10000) % 299;
    qtext.textContent = "Your question is " + stringq[u][2];
    ranrat.textContent = "Difficulty: " + stringq[u][3];
    qlink.textContent = "Click";
    //   console.log(dpq[u]);
    qlink.href = "https://codeforces.com/problemset/problem/" + stringq[u][0] + "/" + stringq[u][1];
}

function quea(A) {
    console.log("HIA");
    let u = Math.ceil(Math.random() * 10000) % 1561;
    let qid = "https://codeforces.com/problemset/problem/" + u + "/" + A;
    ranrat.textContent = "";
    question.classList.remove("d-none");
    qtext.textContent = "Your " + A + " question " + "is Ready";
    qlink.textContent = "Click";
    qlink.href = qid;
}

function qsa() {
    quea("A");
}

function qsb() {
    quea("B");
}

function qsc() {
    quea("C");
}

function qsd() {
    quea("D");
}

function ran() {
    let y = Math.ceil(Math.random() * 1000) % 12;
    let A = "";
    if (y === 0) dp();
    else if (y === 1) gre();
    else if (y === 2) gra();
    else if (y === 3) has();
    else if (y === 4) mat();
    else if (y === 5) bru();
    else if (y === 6) tre();
    else if (y === 7) sor();
    else if (y === 8) matr();
    else if (y === 9) bs();
    else if (y === 10) matr();
    else if (y === 11) str();
}
button.onclick = function() {
    let user_name = inpu.value;
    if (user_name === "") {
        //  console.log("*");
        error.textContent = "Requeired*";
        return;
    }
    check(user_name);
};
//console.log(user_id);
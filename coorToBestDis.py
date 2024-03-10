import heapq
from math import radians, sin, cos, acos
import geopy.distance

def coordinateToDistance(slat, elat, slon, elon):
    coords_1 = (slat, slon)
    coords_2 = (elat, elon)
    distance = geopy.distance.geodesic(coords_1, coords_2).km
    return distance

def minimumSpanningTree(points: list[list[int]]):
    N = len(points)

    adj = {i:[] for i in range(N)}
    for i in range(N):
        x1, y1 = points[i]
        for j in range(i+1, N):
            x2, y2 = points[j]
            dist = coordinateToDistance(x1, x2, y1, y2)
            adj[i].append([dist, j])
            adj[j].append([dist, i])

    res = 0
    visit = set()
    minH = [[0,0]]
    while len(visit) < N:
        cost, i = heapq.heappop(minH)
        if i in visit:
            continue
        res += cost
        visit.add(i)
        for neiCost, nei in adj[i]:
            if nei not in visit:
                heapq.heappush(minH, [neiCost, nei])
    return res

output = minimumSpanningTree([[56.456,-4.738], [56.65, -4.73], [57.367, -4.242]])
print(output)

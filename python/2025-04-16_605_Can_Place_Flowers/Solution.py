class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        remaining = n
        lastEmpty = True
        for i in range(len(flowerbed) - 1):
            if flowerbed[i] == 0:
                if lastEmpty and flowerbed[i + 1] == 0:
                    lastEmpty = False
                    remaining = remaining - 1
                else: 
                    lastEmpty = True
            else:
                lastEmpty = False
        
        if flowerbed[len(flowerbed) -1] == 0 and lastEmpty:
            remaining = remaining - 1
        return remaining <= 0

        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        
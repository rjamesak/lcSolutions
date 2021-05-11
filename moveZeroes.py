# see moveZeroes.js for comments/explanation
# working on py solutions
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zeroPos = []
        for i in range(len(nums)):
            if nums[i] == 0:
                zeroPos.append(i)
            else:
                if len(zeroPos) > 0:
                    zeroIdx = zeroPos.pop(0)
                    nums[zeroIdx] = nums[i]
                    zeroPos.append(i)
                    nums[i] = 0

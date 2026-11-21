/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function isMirrorPair(leftNode, rightNode) {
        if (leftNode === null && rightNode === null) {
            return true;
        }
        if (
            leftNode === null ||
            rightNode === null ||
            leftNode.val !== rightNode.val
        ) {
            return false;
        }
        return (
            isMirrorPair(leftNode.left, rightNode.right) &&
            isMirrorPair(leftNode.right, rightNode.left)
        );
    }

    return isMirrorPair(root.left, root.right);
};
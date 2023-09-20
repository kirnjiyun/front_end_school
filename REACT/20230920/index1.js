// [1, 1, 2, 3, 5, 8, 13 ........]
        function fn(n) {
            if (n === 1 || n === 2) {
                return 1
            } else {
                return fn(n - 1) + fn(n - 2)
            }
        }

        // fn(6)
        // fn(5) + fn(4)
        // fn(4) + fn(3) + fn(3) + fn(2)
        // fn(3) + fn(2) + fn(2) + fn(1) + fn(2) + fn(1) + 1
        // fn(2) + fn(1) + 1 + 1 + 1 + 1 + 1 + 1
        // 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
        // 8
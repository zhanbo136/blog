---
title: 算法详解
date: 2020-05-18
tags:
 - 算法
categories: 
 - 编程基础
---
# 算法

## 递归

**递归应用场景** 

看个实际应用场景，迷宫问题(回溯)， 递归(Recursion)

![image-20200519102952792](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519103000.png)

**递归的概念 简单的说:**

> 递归就是方法自己调用自己,每次调用时传入不同的变量.递归有助于编程者解决复杂的问题,同时可以让代码变得简洁。 

**递归调用机制** 

- 1) 打印问题 
- 2) 阶乘问题 
- 3) 使用图解方式说明了递归的调用机制

![image-20200519103106954](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519103108.png)

**递归需要遵守的重要规则**

- 1) 执行一个方法时，就创建一个新的受保护的独立空间(栈空间) 
- 2) 方法的局部变量是独立的，不会相互影响, 比如 n 变量 
- 3) 如果方法中使用的是引用类型变量(比如数组)，就会共享该引用类型的数据. 
- 4) 递归必须向退出递归的条件逼近，否则就是无限递归,出现 StackOverflowError，死龟了。
- 5) 当一个方法执行完毕，或者遇到 return，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或
  者返回时，该方法也就执行完

**八皇后问题介绍**

八皇后问题，是一个古老而著名的问题，是回溯算法的典型案例。该问题是国际西洋棋棋手马克斯·贝瑟尔于 1848 年提出：在 8×8 格的国际象棋上摆放八个皇后，使其不能互相攻击，即：任意两个皇后都不能处于同一行、 同一列或同一斜线上，问有多少种摆法(92)。

![image-20200519103216652](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519103217.png)

**八皇后问题算法思路分析**

- 1) 第一个皇后先放第一行第一列 

- 2) 第二个皇后放在第二行第一列、然后判断是否 OK， 如果不 OK，继续放在第二列、第三列、依次把所有列都
  放完，找到一个合适 

- 3) 继续第三个皇后，还是第一列、第二列……直到第 8 个皇后也能放在一个不冲突的位置，算是找到了一个正确
  解 

- 4) 当得到一个正确解时，在栈回退到上一个栈时，就会开始回溯，即将第一个皇后，放到第一列的所有正确解， 全部得到. 

- 5) 然后回头继续第一个皇后放第二列，后面继续循环执行 1,2,3,4 的步骤 

- 6) 示意图:

  ![image-20200519103308763](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519103309.png)

**说明：** 

> 理论上应该创建一个二维数组来表示棋盘，但是实际上可以通过算法，用一个一维数组即可解决问题.arr[8]= {0,4,7,5, 2,6,1,3}//对应 arr 下标 表示第几行，即第几个皇后，arr[i] =val , val 表示第 i+1 个皇后，放在第 i+1 行的第 val+1 列

## 排序

**排序算法的介绍** 

排序也称排序算法(SortAlgorithm)，排序是将一组数据，依指定的顺序进行排列的过程。 

> **排序的分类**

- 1) 内部排序: 指将需要处理的所有数据都加载到内部存储器(内存)中进行排序。 
- 2) 外部排序法： 数据量过大，无法全部加载到内存中，需要借助外部存储(文件等)进行排序。 
- 3) 常见的排序算法分类(见右图):

![image-20200519154550854](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519154552.png)

**算法的时间复杂度** 

度量一个程序(算法)执行时间的两种方法

- 1) 事后统计的方法 这种方法可行, 但是有两个问题：一是要想对设计的算法的运行性能进行评测，需要实际运行该程序；二是所 得时间的统计量依赖于计算机的硬件、软件等环境因素, 这种方式，要在同一台计算机的相同状态下运行，才能比较那个算法速度更快。 
- 2) 事前估算的方法 通过分析某个算法的时间复杂度来判断哪个算法更优. 

**时间频度**

> **基本介绍：**

时间频度：一个算法花费的时间与算法中语句的执行次数成正比例，哪个算法中语句执行次数多，它花费时间 就多。一个算法中的语句执行次数称为语句频度或时间频度。记为 T(n)。[举例说明] 

举例说明-基本案例 

比如计算 1-100 所有数字之和, 我们设计两种算法：

![image-20200519154701243](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519154702.png)

> **忽略常数项**

![image-20200519154818718](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519154825.png)

结论: 

- 1) 2n+20 和 2n 随着 n 变大，执行曲线无限接近,20 可以忽略 
- 2) 3n+10 和 3n 随着 n 变大，执行曲线无限接近,10 可以忽略 

> **忽略低次项**

![image-20200519154848379](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519154850.png)

结论: 

- 1) 2n^2+3n+10 和 2n^2 随着 n 变大, 执行曲线无限接近, 可以忽略 3n+10 
- 2) n^2+5n+20 和 n^2 随着 n 变大,执行曲线无限接近, 可以忽略 5n+20 

> **忽略系数**

![image-20200519154928215](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519154929.png)

结论: 

- 1) 随着 n 值变大，5n^2+7n 和 3n^2+2n ，执行曲线重合, 说明 这种情况下,5 和 3 可以忽略。 
- 2) 而 n^3+5n 和 6n^3+4n ，执行曲线分离，说明多少次方式关键 

**时间复杂度** 

- 1) 一般情况下，算法中的基本操作语句的重复执行次数是问题规模 n 的某个函数，用 T(n)表示，若有某个辅 助函数 f(n)，使得当 n 趋近于无穷大时，T(n)/f(n) 的极限值为不等于零的常数，则称 f(n)是 T(n)的同数量级函数。 记作 T(n)=Ｏ(f(n))，称Ｏ(f(n)) 为算法的渐进时间复杂度，简称时间复杂度。 
- 2) T(n) 不同，但时间复杂度可能相同。 如：T(n)=n²+7n+6 与 T(n)=3n²+2n+2 它们的 T(n) 不同，但时间复杂 度相同，都为 O(n²)。 
- 3) 计算时间复杂度的方法： 
  -  用常数 1 代替运行时间中的所有加法常数 T(n)=n²+7n+6 =>T(n)=n²+7n+1 
  -  修改后的运行次数函数中，只保留最高阶项 T(n)=n²+7n+1=>T(n)=n² 
  -  去除最高阶项的系数 T(n)=n² =>T(n)=n² =>O(n²) 

> **常见的时间复杂度**

- 1) 常数阶 O(1) 
- 2) 对数阶 O(log2n)
- 3) 线性阶 O(n) 
- 4) 线性对数阶 O(nlog2n)
- 5) 平方阶 O(n^2) 
- 6) 立方阶 O(n^3) 
- 7) k 次方阶 O(n^k) 
- 8) 指数阶 O(2^n)

> **常见的时间复杂度对应的图:**

![image-20200519155112721](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519155113.png)

说明： 

- 1) 常见的算法时间复杂度由小到大依次为：Ο(1)＜Ο(log2n)＜Ο(n)＜Ο(nlog2n)＜Ο(n2)＜Ο(n3)＜ Ο(nk) ＜ Ο(2n) ，随着问题规模 n 的不断增大，上述时间复杂度不断增大，算法的执行效率越低 
- 2) 从图中可见，我们应该尽可能避免使用指数阶的算法

**平均时间复杂度和最坏时间复杂度** 

- 1) 平均时间复杂度是指所有可能的输入实例均以等概率出现的情况下，该算法的运行时间。 
- 2) 最坏情况下的时间复杂度称最坏时间复杂度。一般讨论的时间复杂度均是最坏情况下的时间复杂度。这样做的
  原因是：最坏情况下的时间复杂度是算法在任何输入实例上运行时间的界限，这就保证了算法的运行时间不会
  比最坏情况更长。 
- 3) 平均时间复杂度和最坏时间复杂度是否一致，和算法有关(如图:)。

![image-20200519155231431](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519155234.png)

**算法的空间复杂度简介** 

> **基本介绍** 

- 1) 类似于时间复杂度的讨论，一个算法的空间复杂度(SpaceComplexity)定义为该算法所耗费的存储空间，它也是 问题规模 n 的函数。 
- 2) 空间复杂度(SpaceComplexity)是对一个算法在运行过程中临时占用存储空间大小的量度。有的算法需要占用的 临时工作单元数与解决问题的规模 n 有关，它随着 n 的增大而增大，当 n 较大时，将占用较多的存储单元，例 如快速排序和归并排序算法, 基数排序就属于这种情况 
- 3) 在做算法分析时，主要讨论的是时间复杂度。从用户使用体验上看，更看重的程序执行的速度。一些缓存产品 (redis,memcache)和算法(基数排序)本质就是用空间换时间.

### 冒泡排序 

> **基本介绍**

冒泡排序（BubbleSorting）的基本思想是：通过对待排序序列从前向后（从下标较小的元素开始）,依次比较
相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就象水底下的气泡一样逐渐向上冒。

**优化：**
因为排序的过程中，各元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在 排序过程中设置一个标志 flag 判断元素是否进行过交换。从而减少不必要的比较。(这里说的优化，可以在冒泡排 序写好后，在进行)

> **演示冒泡过程的例子(图解)**

![image-20200519165008460](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519165009.png)

- (1) 一共进行 数组的大小-1 次 大的循环 
- (2)每一趟排序的次数在逐渐的减少 
- (3) 如果我们发现在某趟排序中，没有发生一次交换， 可以提前结束冒泡排序。这个就是优化

> **冒泡排序应用实例**

```java
public static void sort2(int array[]){
        int temp=0;
        boolean flag =false;
        for (int i = 0 ; i < array.length - 1 ; i++) {
            for (int j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    flag = true;
                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
            //System.out.println("第"+(i+1)+"趟排序"+Arrays.toString(array));
            if(!flag)
                break;  //如果这一轮没有交换位置则跳出排序
            else
                flag = false;  //检查下一轮是否有排序
        }
    }
```

### 选择排序

> **基本介绍**

选择式排序也属于内部排序法，是从欲排序的数据中，按指定的规则选出某一元素，再依规定交换位置后达到
排序的目的。 

选择排序（select sorting）也是一种简单的排序方法。它的基本思想是：第一次从 arr[0]~arr[n-1]中选取最小值， 与 arr[0]交换，第二次从 arr[1]~arr[n-1]中选取最小值，与 arr[1]交换，第三次从 arr[2]~arr[n-1]中选取最小值，与 arr[2] 交换，…，第 i 次从 arr[i-1]~arr[n-1]中选取最小值，与 arr[i-1]交换，…, 第 n-1 次从 arr[n-2]~arr[n-1]中选取最小值， 与 arr[n-2]交换，总共通过 n-1 次，得到一个按排序码从小到大排列的有序序列。 

> **选择排序思路分析图:**	

![image-20200519221022098](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519221023.png)

 **对一个数组的选择排序再进行讲解**

![image-20200519221033076](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519221033.png)

> **选择排序应用实例**

```java
 /**
     * 选择排序
     * 思想：先找到数据中的最小值，放在第一位。依次找出数据最小值，执行数据长度-1次
     */
    public static void sort(int array[]){
        int minIndex=0;//定义最小值的索引位置
        int min = 0;//假设第i个是最小值
        for (int i = 0 ; i < array.length-1 ; i++){
             minIndex = i;
             min = array[i];
            for (int j = i + 1 ; j < array.length ; j++){
                if (min > array[j]){ //如果第一个不是最小值，则进行最小值赋值和索引改变
                    min = array[j];
                    minIndex =j;
                }
            }
            if(minIndex!=i){    //最小值的索引未改变
                array[minIndex] = array[i]; //把最小值移到当前索引
                array[i] =min; //把最小值移到当前索引
            }
            //System.out.println("第"+(i+1)+"趟"+ Arrays.toString(array));
        }
    }
```

### 插入排序

> **插入排序法介绍:**

插入式排序属于内部排序法，是对于欲排序的元素以插入的方式找寻该元素的适当位置，以达到排序的目的。 

> **插入排序法思想:** 

插入排序（InsertionSorting）的基本思想是：把 n 个待排序的元素看成为一个有序表和一个无序表，开始时有 序表中只包含一个元素，无序表中包含有 n-1 个元素，排序过程中每次从无序表中取出第一个元素，把它的排
序码依次与有序表元素的排序码进行比较，将它插入到有序表中的适当位置，使之成为新的有序表。 

**插入排序思路图:**

![image-20200519221206464](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200519221207.png)

> **插入排序应用实例**

```java
 /**
     * 插入排序
     */
    public static void sort(int [] array){
        int insertVal =0; //待插入的数字
        int insertIndex=0;//待插入数字的前一个数字的下标

        for (int i =1 ; i< array.length ;i++){
            insertVal= array[i];
            insertIndex = i-1;
            //insertIndex找到插入的位置
            //1、insertIndex >= 0保证下标不越界
            //2、insertVal<array[insertIndex]待插入的数字还没找到插入的位置
            //3、需要将array[insertIndex]后移

            while (insertIndex >= 0 && insertVal<array[insertIndex]){
                array[insertIndex+1] =array[insertIndex];
                insertIndex--;
            }

            if(insertIndex+1 != i )
                array[insertIndex+1] = insertVal;
//            System.out.println("第"+i+"轮插入排序");
//            System.out.println(Arrays.toString(array));
        }
    }
```

### 希尔排序

简单插入排序存在的问题

我们看简单的插入排序可能存在的问题. 

数组 arr={2,3,4,5,6,1} 这时需要插入的数 1(最小), 这样的过程是： 

{2,3,4,5,6,6} 

{2,3,4,5,5,6} 

{2,3,4,4,5,6} 

{2,3,3,4,5,6} 

{2,2,3,4,5,6} 

{1,2,3,4,5,6} 

结论: 当需要插入的数是较小的数时，后移的次数明显增多，对效率有影响.

> **希尔排序法介绍**

希尔排序是希尔（DonaldShell）于 1959 年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。

> **希尔排序法基本思想**

希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含 的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止

> **希尔排序法的示意图**

![image-20200520113925437](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520113933.png)

![image-20200520113944815](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520113946.png)

> **希尔排序法应用实例**

```java
 /**
     *对交换式的希尔排序进行优化->移位法
     * @param arr
     */
    public static void sort2(int[] arr) {

        // 增量gap, 并逐步的缩小增量
        for (int gap = arr.length / 2; gap > 0; gap /= 2) {
            // 从第gap个元素，逐个对其所在的组进行直接插入排序
            for (int i = gap; i < arr.length; i++) {
                int j = i;
                int temp = arr[j];
                if (arr[j] < arr[j - gap]) {
                    while (j - gap >= 0 && temp < arr[j - gap]) {
                        //移动
                        arr[j] = arr[j-gap];
                        j -= gap;
                    }
                    //当退出while后，就给temp找到插入的位置
                    arr[j] = temp;
                }

            }
        }
    }
```

### 快速排序

> **快速排序法介绍:**

快速排序（Quicksort）是对冒泡排序的一种改进。基本思想是：通过一趟排序将要排序的数据分割成独立的两
部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排
序，整个排序过程可以递归进行，以此达到整个数据变成有序序列 

> **快速排序法示意图:**

![image-20200520114029342](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520114030.png)

![image-20200520114036877](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520114037.png)

> **快速排序法应用实例:** 

```java
 /**
     * 快速排序
     */
    public static void sort(int[] array,int left, int right) {
        int l = left; //左下标
        int r = right; //右下标
        //pivot 中轴值
        int pivot = array[(left + right) / 2];
        int temp = 0; //临时变量，作为交换时使用
        //while循环的目的是让比pivot 值小放到左边
        //比pivot 值大放到右边
        while( l < r) {
            //在pivot的左边一直找,找到大于等于pivot值,才退出
            while( array[l] < pivot) {
                l += 1;
            }
            //在pivot的右边一直找,找到小于等于pivot值,才退出
            while(array[r] > pivot) {
                r -= 1;
            }
            //如果l >= r说明pivot 的左右两的值，已经按照左边全部是
            //小于等于pivot值，右边全部是大于等于pivot值
            if( l >= r) {
                break;
            }
            //交换
            temp = array[l];
            array[l] = array[r];
            array[r] = temp;
            //如果交换完后，发现这个arr[l] == pivot值 相等 r--， 前移
            if(array[l] == pivot) {
                r -= 1;
            }
            //如果交换完后，发现这个arr[r] == pivot值 相等 l++， 后移
            if(array[r] == pivot) {
                l += 1;
            }
        }
        // 如果 l == r, 必须l++, r--, 否则为出现栈溢出
        if (l == r) {
            l += 1;
            r -= 1;
        }
        //向左递归
        if(left < r) {
            sort(array, left, r);
        }
        //向右递归
        if(right > l) {
            sort(array, l, right);
        }
    }
```

### 归并排序

> **归并排序介绍:**

归并排序（MERGE-SORT）是利用归并的思想实现的排序方法，该算法采用经典的分治（divide-and-conquer） 策略（分治法将问题分(divide)成一些小的问题然后递归求解，而治(conquer)的阶段则将分的阶段得到的各答案"修 补"在一起，即分而治之)。

>  **归并排序思想示意图 1-基本思想:**

![image-20200520212933685](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520212935.png) 

>  **归并排序思想示意图 2-合并相邻有序子序列:**

再来看看治阶段，我们需要将两个已经有序的子序列合并成一个有序序列，比如上图中的最后一次合并，要将 [4,5,7,8]和[1,2,3,6]两个已经有序的子序列，合并为最终序列[1,2,3,4,5,6,7,8]，来看下实现步骤

![image-20200520212952328](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520212953.png)

>  **归并排序的应用实例:** 

```java
/**
     * 分+合方法
     * @param arr 排序数组
     * @param left 最左
     * @param right 最右
     * @param temp
     */
    public static void sort(int[] arr, int left, int right, int[] temp) {
        if(left < right) {
            int mid = (left + right) / 2; //中间索引
            //向左递归进行分解
            sort(arr, left, mid, temp);
            //向右递归进行分解
            sort(arr, mid + 1, right, temp);
            //合并
            merge(arr, left, mid, right, temp);

        }
    }

    /**
     *合并方法
     * @param arr 排序的原始数组
     * @param left 左边有序序列的初始索引
     * @param mid 中间索引
     * @param right 右边索引
     * @param temp 做中转的数组
     */
    public static void merge(int[] arr, int left, int mid, int right, int[] temp) {
        int i = left; // 初始化i, 左边有序序列的初始索引
        int j = mid + 1; //初始化j, 右边有序序列的初始索引
        int t = 0; // 指向temp数组的当前索引
        //(一)
        //先把左右两边(有序)的数据按照规则填充到temp数组
        //直到左右两边的有序序列，有一边处理完毕为止
        while (i <= mid && j <= right) {//继续
            //如果左边的有序序列的当前元素，小于等于右边有序序列的当前元素
            //即将左边的当前元素，填充到 temp数组
            //然后 t++, i++
            if(arr[i] <= arr[j]) {
                temp[t] = arr[i];
                t += 1;
                i += 1;
            } else { //反之,将右边有序序列的当前元素，填充到temp数组
                temp[t] = arr[j];
                t += 1;
                j += 1;
            }
        }
        //(二)
        //把有剩余数据的一边的数据依次全部填充到temp
        while( i <= mid) { //左边的有序序列还有剩余的元素，就全部填充到temp
            temp[t] = arr[i];
            t += 1;
            i += 1;
        }
        while( j <= right) { //右边的有序序列还有剩余的元素，就全部填充到temp
            temp[t] = arr[j];
            t += 1;
            j += 1;
        }
        //(三)
        //将temp数组的元素拷贝到arr
        //注意，并不是每次都拷贝所有
        t = 0;
        int tempLeft = left; //
        //第一次合并 tempLeft = 0 , right = 1 //  tempLeft = 2  right = 3 // tL=0 ri=3
        //最后一次 tempLeft = 0  right = 7
        while(tempLeft <= right) {
            arr[tempLeft] = temp[t];
            t += 1;
            tempLeft += 1;
        }
    }
```

### 基数排序

> **基数排序(桶排序)介绍:**

- 1) 基数排序（radixsort）属于“分配式排序”（distributionsort），又称“桶子法”（bucket sort）或 binsort，顾
  名思义，它是通过键值的各个位的值，将要排序的元素分配至某些“桶”中，达到排序的作用 
- 2) 基数排序法是属于稳定性的排序，基数排序法的是效率高的稳定性排序法 
- 3) 基数排序(RadixSort)是桶排序的扩展 
- 4) 基数排序是 1887 年赫尔曼·何乐礼发明的。它是这样实现的：将整数按位数切割成不同的数字，然后按每个
  位数分别比较。 

> **基数排序基本思想**

- 1) 将所有待比较数值统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。 这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。
- 2) 这样说明，比较难理解，下面我们看一个图文解释，理解基数排序的步骤

 **基数排序图文说明** 

将数组 {53,3,542,748,14,214} 使用基数排序, 进行升序排序

![image-20200520213122944](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520213123.png)

![image-20200520213131587](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520213132.png)

>  **基数排序归应用实例**

```java
/**
     * 基数排序
     * @param arr
     */
    public static void sort(int[] arr) {
        //根据前面的推导过程，我们可以得到最终的基数排序代码
        //1. 得到数组中最大的数的位数
        int max = arr[0]; //假设第一数就是最大数
        for(int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        //得到最大数是几位数
        int maxLength = (max + "").length();
        //定义一个二维数组，表示10个桶, 每个桶就是一个一维数组
        //说明
        //1. 二维数组包含10个一维数组
        //2. 为了防止在放入数的时候，数据溢出，则每个一维数组(桶)，大小定为arr.length
        //3. 名明确，基数排序是使用空间换时间的经典算法
        int[][] bucket = new int[10][arr.length];
        //为了记录每个桶中，实际存放了多少个数据,我们定义一个一维数组来记录各个桶的每次放入的数据个数
        //可以这里理解
        //比如：bucketElementCounts[0] , 记录的就是  bucket[0] 桶的放入数据个数
        int[] bucketElementCounts = new int[10];
        //这里我们使用循环将代码处理
        for(int i = 0 , n = 1; i < maxLength; i++, n *= 10) {
            //(针对每个元素的对应位进行排序处理)， 第一次是个位，第二次是十位，第三次是百位..
            for(int j = 0; j < arr.length; j++) {
                //取出每个元素的对应位的值
                int digitOfElement = arr[j] / n % 10;
                //放入到对应的桶中
                bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
                bucketElementCounts[digitOfElement]++;
            }
            //按照这个桶的顺序(一维数组的下标依次取出数据，放入原来数组)
            int index = 0;
            //遍历每一桶，并将桶中是数据，放入到原数组
            for(int k = 0; k < bucketElementCounts.length; k++) {
                //如果桶中，有数据，我们才放入到原数组
                if(bucketElementCounts[k] != 0) {
                    //循环该桶即第k个桶(即第k个一维数组), 放入
                    for(int l = 0; l < bucketElementCounts[k]; l++) {
                        //取出元素放入到arr
                        arr[index++] = bucket[k][l];
                    }
                }
                //第i+1轮处理后，需要将每个 bucketElementCounts[k] = 0 ！！！！
                bucketElementCounts[k] = 0;
            }
            //System.out.println("第"+(i+1)+"轮，对个位的排序处理 arr =" + Arrays.toString(arr));
        }
    }
```

 **基数排序的说明:**

- 1) 基数排序是对传统桶排序的扩展，速度很快. 
- 2) 基数排序是经典的空间换时间的方式，占用内存很大, 当对海量数据排序时，容易造成 OutOfMemoryError 。 
- 3) 基数排序时稳定的。[注:假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些 记录的相对次序保持不变，即在原序列中，r[i]=r[j]，且 r[i]在 r[j]之前，而在排序后的序列中，r[i]仍在 r[j]之前， 则称这种排序算法是稳定的；否则称为不稳定的] 
- 4) 有负数的数组，我们不用基数排序来进行排序, 如果要支持负数，参考:https://code.i-harness.com/zh-CN/q/e98fa9

### 常用排序算法总结和对比 

> **一张排序算法的比较图**

![image-20200520213430282](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520213431.png)

>  **相关术语解释：**

- 1) 稳定：如果 a 原本在 b 前面，而 a=b，排序之后 a 仍然在 b 的前面； 
- 2) 不稳定：如果 a 原本在 b 的前面，而 a=b，排序之后 a 可能会出现在 b 的后面； 
- 3) 内排序：所有排序操作都在内存中完成； 
- 4) 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；
- 5) 时间复杂度： 一个算法执行所耗费的时间。 
- 6) 空间复杂度：运行完一个程序所需内存的大小。 
- 7) n: 数据规模 
- 8) k: “桶”的个数 
- 9) In-place: 不占用额外内存 
- 10) Out-place: 占用额外内存

## 查找

在 java 中，我们常用的查找有四种: 

- 1) 顺序(线性)查找 
- 2) 二分查找/折半查找
- 3) 插值查找 
- 4) 斐波那契查找 

### 线性查找

有一个数列： {1,8,10, 89,1000,1234} ，判断数列中是否包含此名称【顺序查找】 要求: 如果找到了，就提
示找到，并给出下标值。

```java
 public static  int  search(int array[] ,int value){
        for (int i =0  ;i <array.length ;i++)
            if(array[i] == value)
                return i;
        return -1;
    }
```

### 二分查找

请对一个有序数组进行二分查找 {1,8,10,89,1000,1234} ，输入一个数看看该数组是否存在此数，并且求出下 标，如果没有就提示"没有这个数"。 

二分查找算法的思路

![image-20200520224725680](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200520224729.png)

二分查找的代码 

```java
 /**递归版
     * @param array
     * @param left
     * @param right
     * @param findValue
     */
    public static int search(int array[], int left, int right, int findValue) {
        if (left > right) //未找到
            return -1;
        int mid = (left + right) / 2;
        if (findValue > array[mid]) { //右递归
            return search(array, mid + 1, right, findValue);
        } else if (findValue < array[mid]) {//左递归
            return search(array, left, mid - 1, findValue);
        } else {
            return mid;
        }
    }

    /**
     * 二分查找非递归
     * @param array
     * @param key
     * @return
     */
    public static int search3(int array[], int key) {
        int mid;
        int left = 0;
        int right = array.length - 1;
        while (left <= right) {
            mid = (right - left) / 2 + left;
            if (key < array[mid]) {
                right = mid - 1;
            } else if (key > array[mid]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
```

### 插值查找

> **插值查找原理介绍:**

插值查找算法类似于二分查找，不同的是插值查找每次从自适应 mid 处开始查找。 

将折半查找中的求 mid 索引的公式 ,low 表示左边索引 left,high 表示右边索引 right. 

key 就是前面我们讲的 findVal

![image-20200521121107619](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200521121115.png)

 ```java
int mid=low+(high-low)*(key-arr[low])/(arr[high]-arr[low]) ;/*插值索引*/
对应前面的代码公式： 
int mid=left+(right – left)*(findVal – arr[left])/(arr[right] – arr[left]) 
 ```

> **插值查找应用案例：** 

```java
/**
     *插值查找
     * @param array
     * @param left
     * @param right
     * @param findValue
     * @return
     */
    public static int search(int [] array , int left ,int right ,int findValue){
        //防止 findValue<array[0] || findValue>array[array.length-1]下标越界
        if(left> right || findValue<array[0] || findValue>array[array.length-1])
            return -1;
        int mid = left+ ( right- left)* ( findValue - array[left]) / (array[right] - array[left]);
        int midValue =array[mid];
        if(findValue>midValue){  //右递归
            return search(array,mid+1 ,right ,findValue);
        }else if(findValue<midValue){ //左递归
            return search(array,left,mid-1,findValue);
        }else {
            return mid;
        }
    }
```

> **插值查找注意事项：** 

- 1) 对于数据量较大，关键字分布比较均匀的查找表来说，采用插值查找, 速度较快. 
- 2) 关键字分布不均匀的情况下，该方法不一定比折半查找要好

### 斐波那契查找

> **斐波那契(黄金分割法)查找基本介绍:**

- 1) 黄金分割点是指把一条线段分割为两部分，使其中一部分与全长之比等于另一部分与这部分之比。取其前三位 数字的近似值是 0.618。由于按此比例设计的造型十分美丽，因此称为黄金分割，也称为中外比。这是一个神
  奇的数字，会带来意向不大的效果。
- 2) 斐波那契数列 {1,1,2,3,5,8,13,21,34,55} 发现斐波那契数列的两个相邻数 的比例，无限接近 黄金分割值 0.618

> **斐波那契(黄金分割法)原理:** 

斐波那契查找原理与前两种相似，仅仅改变了中间结点（mid）的位置，mid 不再是中间或插值得到，而是位 于黄金分割点附近，即 mid=low+F(k-1)-1（F 代表斐波那契数列），如下图所示

![image-20200521121330657](https://guliedu-zhanbo.oss-cn-beijing.aliyuncs.com/blog/image/20200521121331.png)

> **对 F(k-1)-1 的理解**： 

- 1) 由斐波那契数列 F[k]=F[k-1]+F[k-2] 的性质，可以得到 （F[k]-1）=（F[k-1]-1）+（F[k-2]-1）+1 。该式说明： 只要顺序表的长度为 F[k]-1，则可以将该表分成长度为 F[k-1]-1 和 F[k-2]-1 的两段，即如上图所示。从而中间位置为 mid=low+F(k-1)-1

- 2) 类似的，每一子段也可以用相同的方式分割 

- 3) 但顺序表长度 n 不一定刚好等于 F[k]-1，所以需要将原来的顺序表长度 n 增加至 F[k]-1。这里的 k 值只要能使 得 F[k]-1 恰好大于或等于 n 即可，由以下代码得到,顺序表长度增加后，新增的位置（从 n+1 到 F[k]-1 位置）， 都赋为 n 位置的值即可。 

  ​	while(n>fib(k)-1) k++;

斐波那契查找应用案例： 

```java
 /**
     * 因为后面我们mid=low+F(k-1)-1，需要使用到斐波那契数列，因此我们需要先获取到一个斐波那契数列
     * 非递归方法得到一个斐波那契数列
     * @return
     */
    public static int[] fib() {
        int[] f = new int[maxSize];
        f[0] = 1;
        f[1] = 1;
        for (int i = 2; i < maxSize; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        return f;
    }
    /**
     *使用非递归的方式
     * @param a  数组
     * @param key 我们需要查找的关键码(值)
     * @return 返回对应的下标，如果没有-1
     */
    public static int fibSearch(int[] a, int key) {
        int low = 0;
        int high = a.length - 1;
        int k = 0; //表示斐波那契分割数值的下标
        int mid = 0; //存放mid值
        int f[] = fib(); //获取到斐波那契数列
        //获取到斐波那契分割数值的下标
        while (high > f[k] - 1) {
            k++;
        }
        //因为 f[k] 值 可能大于 a 的 长度，因此我们需要使用Arrays类，构造一个新的数组，并指向temp[]
        //不足的部分会使用0填充
        int[] temp = Arrays.copyOf(a, f[k]);
        //实际上需求使用a数组最后的数填充 temp
        //举例:
        //temp = {1,8, 10, 89, 1000, 1234, 0, 0}  => {1,8, 10, 89, 1000, 1234, 1234, 1234,}
        for (int i = high + 1; i < temp.length; i++) {
            temp[i] = a[high];
        }

        // 使用while来循环处理，找到我们的数 key
        while (low <= high) { // 只要这个条件满足，就可以找
            mid = low + f[k - 1] - 1;
            if (key < temp[mid]) { //我们应该继续向数组的前面查找(左边)
                high = mid - 1;
                //为甚是 k--
                //说明
                //1. 全部元素 = 前面的元素 + 后边元素
                //2. f[k] = f[k-1] + f[k-2]
                //因为 前面有 f[k-1]个元素,所以可以继续拆分 f[k-1] = f[k-2] + f[k-3]
                //即 在 f[k-1] 的前面继续查找 k--
                //即下次循环 mid = f[k-1-1]-1
                k--;
            } else if (key > temp[mid]) { // 我们应该继续向数组的后面查找(右边)
                low = mid + 1;
                //为什么是k -=2
                //说明
                //1. 全部元素 = 前面的元素 + 后边元素
                //2. f[k] = f[k-1] + f[k-2]
                //3. 因为后面我们有f[k-2] 所以可以继续拆分 f[k-1] = f[k-3] + f[k-4]
                //4. 即在f[k-2] 的前面进行查找 k -=2
                //5. 即下次循环 mid = f[k - 1 - 2] - 1
                k -= 2;
            } else { //找到
                //需要确定，返回的是哪个下标
                if (mid <= high) {
                    return mid;
                } else {
                    return high;
                }
            }
        }
        return -1;
    }
```

 
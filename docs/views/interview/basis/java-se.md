---
title: Java基础面试题之JAVASE
date: 2020-05-12
tags:
 - Java基础
categories: 
 - 面试
---
### 以下内容均非原创，是整理了网上的资源
## 基础语法 9

### Q1：简单说说Java有哪些数据类型                               √

> ①分为基本数据类型和引用数据类型。
>
> ②基本数据类型包括：数值型（byte、short、int、long、float、double），字符型（char）以及布尔型（boolean）。除了基本类型外，其他数据类型都属于引用类型，包括类、接口、数组等。

### Q2：float number=3.4;有没有问题？为什么？         √

> 答：有问题，因为3.4 是双精度数，将双精度型（double）赋值给浮点型（float）属于向下转型，可能会造成精度损失，所以必须进行强制类型转换，正确的写法是float number =(float)3.4;/ float number =3.4F;。

### Q3：字符串拼接的方式以及效率？                 √

> ①使用+直接拼接，String 是final对象，不会被修改，每次使用 +进行拼接都会创建新的对象，而不是改变原来的对象，效率低，是线程安全的。
>
> ②使用StringBuffer可变字符串，效率较高，是线程安全的（StringBuffer的方法使用了synchronized关键字进行修饰）。
>
> ③使用StringBuilder可变字符串，效率最高，但是线程不安全。

### Q4：简述final，finally和finalize区别                  √

> ①final可以修饰类，方法和变量，被final修饰的类不可继承，被final修饰的方法不可重写，被final修饰的变量引用不可更改，引用的内容可以更改。
>
> ②finally用于try-catch代码块中，无论是否发生异常最后都将执行，作用是释放资源。
>
> ③finalize是Object类的方法，在对象被垃圾回收之前将调用一次，一般用于资源的释放。

### Q5：==和equals有什么区别？equals和hashCode有什么联系？  √

> ①如果是引用类型，==比较的是两个对象的引用是否完全相同，如果是基本类型，比较的是两个基本类型的数值是否相同。
>
> ②如果没有重写的话，equals默认按照==进行比较，如果重写了equals()方法，则按照对应的比较规则比较。
>
> ③两个对象如果相等，那么它们的hashCode值必须相等，但两个对象的hashCode值相等时，它们不一定相同。

### Q6：Array和ArrayList的区别？                           √

> ①Array长度在定义之后就不运行改变了，而ArrayList是长度可变的，可以自动扩容。
>
> ②Array可以容纳基本类型和对象，而ArrayList只能容纳对象。 
>
> ③ArrayList提供了更多操作数据的方法。

### Q7：&和&&的区别？                                              √

> ①&具有按位与和逻辑与两个功能。
>
> ②&&作为逻辑与具有短路的特点，当前面的条件表达式为false时就不会进行后面条件表达式的判断，可以用来避免空指针异常。

### Q8：简述JDK8的新特性                                           √

> ①接口中可以添加default修饰的非抽象方法，可以有方法体和内容。
>
> ②可以使用lambda表达式，减少代码冗余。
>
> ③函数式接口，使用@FunctionalInterface注解标明，该接口有且仅有一个抽象方法。
>
> ④方法引用，可以直接引用已有Java类或对象的方法或构造器，进一步简化lambda表达式。
>
> ⑤stream流，用于解决已有集合/数组类库的弊端，简化其操作，有foreach遍历、filter过滤、map映射、concat合并等功能。
>
> ⑥增加日期相关的API。

### Q9：Stream流了解吗？                                         √

> ①Stream流是JDK1.8的新特性，用于解决已有集合/数组类库的弊端，简化集合/数组的操作。
>
> ②stream流的获取：集合：直接调用stream()方法获取；数组：使用静态方法Stream.of()/Arrays.stream()获取。
>
> ③常用方法：forEach() 遍历；count() 统计个数；filter() 按条件过滤；limit() 取前面n个元素；skip() 跳过前面n个元素；map() 映射加工；concat() 合并stream流。
>
> ④终结方法：foreach/count 调用终结方法后流不能继续使用；非终结方法：每次调用完返回一个新的stream对象，可以继续使用，支持链式编程。
>
> ⑤收集stream流：把流转为Set集合 collect(Collections.toSet())；把流转为List集合 collect(Collections.toList())；把流转为Collection集合 collect(Collections.toCollection())；把流转为数组 toArray()。

## 面向对象 10

### Q1：简述面向对象的特性                                     √      

> ①封装：建议成员变量私有，然后提供公有的getter/setter方法来获取值/赋值，封装的核心思想是合理隐藏，合理暴露，可以提高安全性，实现代码的组件化。
>
> ②继承：一种子类到父类的关系，是“is a”关系，可以提高代码的复用性，相同代码可写到父类，子类的功能更加强大，不仅得到了父类的功能，还有自己的功能。
>
> ③多态：同一个类型的对象执行相同的行为，在不同的状态下表现出不同的特征。多态可以降低类之间的耦合度，右边对象可以实现组件化切换，业务功能随之改变，便于扩展和维护。

### Q2：类和对象有什么区别？                                √

> 答：类是一个抽象的概念，是具有相同特征的事物的描述，是对象的模板。对象是一个个具体的存在，是类的实例。

### Q3：列举Object类的方法                                   √

> ①equals(Object obj)：判断其他对象是否与当前对象相等。
>
> ②toString()：打印当前对象的字符串表示。
>
> ③wait()：导致当前线程等待，等待其他线程唤醒，会释放锁。
>
> ④notify()/notifyAll()：随机唤醒一个/全部线程。
>
> ⑤hashCode()：返回当前对象的hashCode值。
>
> ⑥finalize()：当垃圾回收器要回收对象前调用。
>
> ⑦clone()：创建并返回对象的一个副本。

### Q4：方法重载和方法重写的区别？                            √

> ①方法重载是同一个类中具有不同参数列表的同名方法（无关返回值类型），方法重写是子类中具有和父类相同参数列表的同名方法，会覆盖父类原有的方法。
>
> ②重载的返回值类型和权限修饰符，异常抛出类型没有要求，重写方法的返回值类型小于等于父类被重写方法的返回值类型，修饰符权限大于等于父类被重写方法权限修饰符，抛出的异常类型小于等于父类被重写方法抛出的异常类型。

### Q5：接口和抽象类有什么区别？                                √

> ①接口中只能定义public staic final修饰的常量，抽象类中可以定义普通变量。
>
> ②接口和抽象类都不能实例化，但接口没有构造器，抽象类有构造器。
>
> ③接口可以多实现，抽象类只能单继承。
>
> ④接口在JDK1.8之前只能定义public abstract修饰的方法，JDK1.8开始可以定义默认方法和静态方法，JDK1.9开始可以定义私有方法，抽象类中的方法没有限制。

### Q6：什么时候应该使用接口，什么时候应该使用抽象类？             √

> ①如果知道某个类应该成为基类，那么第一选择应该是让它成为一个接口，只有在必须要有方法定义和成员变量的时候，才应该选择抽象类。
>
> ②在接口和抽象类的选择上，必须遵守这样一个原则：行为模型应该总是通过接口而不是抽象类定义。通过抽象类建立行为模型会出现的问题：如果有一个抽象类Moblie，有两个继承它的类Mobile1和Moblie2，分别有自己的功能1和功能2，如果出现一个既有功能1又有功能2的新产品需求，由于Java不允许多继承就出现了问题，而如果是接口的话只需要同时实现两个接口即可。

### Q7：内部类有什么作用？有哪些分类？                  ？

> ①内部类有更好的封装性，有更多的权限修饰符，封装性可以得到更多的控制。
>
> ②静态内部类：由static修饰，属于类本身，只加载一次。类可以定义的成员静态内部类都可以定义，可以访问外部类的静态变量和方法，通过new 外部类，静态内部类构造器来创建对象。
>
> ③成员内部类：属于外部类的每个对象，随对象一起加载。不可以定义静态成员和方法，可以访问外部类的所有内容，通过new 外部类构造器.静态内部类构造器来创建对象。
>
> ④局部内部类：定义在方法、构造器、代码块、循环中。只能定义实例成员变量和实例方法，作用范围仅在局部代码块中。
>
> ⑤匿名内部类：没有名字的局部内部类，可以简化代码，匿名内部类会立即创建一个匿名内部类的对象返回，对象类型相当于当前new的类的子类类型。

### Q8：泛型和泛型擦除是什么？                             √

> ①泛型的本质是参数化类型，泛型提供了编译时类型的安全检测机制，该机制允许程序在编译时检测非法的类型。
>
> ②在编译阶段采用泛型时加上的类型参数，会被编译器在编译时去掉，这个过程就被称为类型擦除，因此泛型主要用于编译阶段，在编译后生成的Java字节代码文件中不包含泛型中的类型信息。

### Q9：泛型标记的规范了解吗？                                  √

> ①E：值Element，在集合中使用，表示在集合中存放的元素。
>
> ②T：指Type，表示Java类，包括基本的类以及自定义类。
>
> ③K：指Key，表示键，例如Map集合中的Key。
>
> ④V：指Value，表示值，例如Map集合中的Value。
>
> ⑤N：指Number，表示数值类型。
>
> ⑥？：表示不确定的Java类型。

### Q10：泛型限定是什么？                                            √

> ①类型通配符使用？表示所有具体的参数类型，在使用泛型的时候，如果希望将类的继承关系加入泛型应用中就需要对泛型做限定，具体的泛型限定有对泛型上限的限定以及对泛型下限的限定。
>
> ②对泛型上限的限定使用<? extends T>，它表示该通配符所代表的类型是T类的子类型或T接口的子接口。
>
> ③对泛型下限的限定使用<? super T>，它表示该通配符所代表的类型是T类的父类型或T接口的父接口。

## 异常 2

### Q1：异常有哪些分类？出现的原因是什么？               √

> ①Throwable是所有错误和异常的父类，Throwable分为Error和Exception。
>
> ②Error指Java程序运行错误，出现Error通常是因为系统的内部错误或资源耗尽，Error不能在运行过程中被动态处理，如果程序运行中出现Error，系统只能记录错误的原因和安全终止。
>
> ③Exception指Java程序运行异常，即运行中发生了不期望的情况，分为RuntimeException和CheckedException。RuntimeException指在Java虚拟机正常运行期间抛出的异常，可以被捕获并处理，例如空指针异常，数组越界等。CheckedException指编译阶段强制要求捕获并处理的异常，例如IO异常，SQL异常等。

### Q2：有哪些异常处理方式？                             √

> ①抛出异常：遇到异常不进行具体处理，而是将异常抛出给调用者，由调用者根据情况处理。抛出异常有2种形式，一种是throws，作用在方法上，一种是throw，作用在方法内。
>
> ②使用try/catch进行异常的捕获处理，try中发生的异常会被catch代码块捕获，根据情况进行处理，如果有finally代码块无论是否发生异常都会执行，一般用于释放资源，JDK1.7开始可以将资源定义在try代码块中自动释放减少代码。

## 集合 10

### Q1：简述一下集合主要有哪些类和接口，各自有什么特点              √

> ①主要有两个接口Collection和Map，其中Collection又包括List、Set和Queue。
>
> ②List是有序的，主要包括ArrayList，LinkedList和Vector，ArrayList底层通过数组实现，线程不安全，Vector是线程安全的ArrayList，但效率较低，LinkedList底层通过双向链表实现，与ArrayList相比增删快查询慢。
>
> ③Set是唯一且无序的，主要包括HashSet，LinkedHashSet和TreeSet。HashSet底层其实就是HashMap，利用了key来保证元素的唯一性。LinkedHashSet可以按照key的操作顺序排序，TreeSet支持按照默认或指定的排序规则排序。
>
> ④Queue是队列结构，主要有ArrayBlockingQueue基于数组的阻塞队列、LinkedBlockingQueue基于链表的阻塞队列等。
>
> ⑤Map以key-value键值对的形式存储元素，主要包括HashMap、LinkedHashMap和TreeMap。HashMap底层通过数组+链表/红黑树实现，LinkedHashMap可以按照key的操作顺序对集合排序，TreeMap可以按照默认或指定的排序规则对集合排序。

### Q2：HashMap是线程安全的吗？                             √

> ①HashMap是线程不安全的，可以使用ConcurrentHashMap保证线程安全。
>
> ②ConcurrentHashMap基于减小锁粒度的思想，通过使用分段锁来实现线程安全，内部细分为很多Segment数据段，默认情况下为16个，对每个Segment的数据都单独进行加锁操作，Segment的个数为锁的并发度。ConcurrentHashMap是由Segment数组和HashEntry数组组成的，Segment继承了可重入锁，HashEntry用来存储键值对数据。
>
> ③Segment的结构和HashMap类似，是数组和链表结构，每个Segment里面都包含一个HashEntry数组，每个HashEntry都是一个链表结构的数据要对其进行修改必须先获得对应的Segment锁。
>
> ④多线程下只要加入的数据hashCode映射的数据段不一样就可以做到并行的线程安全。

### Q3：List、Set、Map有什么区别？                         √

> ①List是有序、可重复、有索引的集合，继承了Collection集合全部功能 除了Collection的三种遍历方式外，可用索引遍历。
>
> ②Set是无序，不可重复的集合，Set的实现类LinkedHashSet和TreeSet是有序的，LinkedHashSet可以按照元素插入的顺序排序，也可以按照元素操作的时间排序，TreeSet可以按照默认的比较规则或者自定义的比较规则排序。
>
> ③Map是无序、以key-value的键值对形式存储元素的集合，键不可重复，值无要求，重复的键对应的值会覆盖之前的值。

### Q4：HashSet是如何去重的？                                     √

> ①对于基本类型的包装类，可以直接按值进行比较。
>
> ②对于引用数据类型，会先比较hashCode()返回值是否相同，如果不同则代表不是同一个对象，如果相同则继续比较equals()方法返回值是否相同，都相同说明是同一个对象。
>
> ③如果希望内容相同的对象就代表对象相同，那么除了重写equals()方法还要重写hashCode()方法，因为内容相同的对象hashCode()值不一定相同，因为只有hashCode()和equals()都相同才说明是同一个对象。

### Q5：HashMap和HashSet的底层是怎么实现的？            √ 重点

> ①JDK1.8之前，HashMap的底层是数组加链表实现。数组中的每个元素都是一个单链表，链表中的每个元素都是Entry的实现类Node的一个实例，Node包括4个属性：key、value、hash值和用于指向单链表下一个元素的next。
>
> ②HashMap在查找数据时，根据hash值可以快速定位到数组的具体下标，然后对链表进行遍历查找数据的时间复杂度为O(n)。JDK1.8起对HashMap进行了优化，底层改为数组+链表或红黑树（平衡二叉查找树），当链表中的元素超过8个之后，HashMap会将链表结构转换未红黑树以提高查询效率，时间复杂度为O(logn)。
>
> ②HashSet的底层是基于HashMap实现的，HashSet中的元素只是存放在了底层HashMap的key上， 而value使用一个static final的Object对象标识。因此HashSet 的实现比较简单，相关操作基本上都是直接调用底层HashMap的相关方法来完成的。

### Q6：Collection和Collections有什么区别？             √

> ①Collection是一个集合接口，它包括List有序集合、Set无序集合、Queue队列等。
>
> ②Collections则是Collection的一个工具类，为Collection类型的对象提供了很多方便的方法，例如addAll可以直接对Collection集合批量添加元素，shuffle可以随机打乱List集合的元素顺序，sort可以对List集合进行默认或按比较器进行排序。

### Q7：迭代器是什么？                                   √

> ①迭代器实现了Iterator接口，是用于遍历Collection集合元素的一个指针。
>
> ②主要有三个方法：通过iterator()获得集合的迭代器；通过hasNext()判断集合当中是否还有元素，如果有返回true，没有则返回false，初始时迭代器位于第一个元素之前；通过next()获取集合的下一个元素，并向后移动一个元素的单位。

### Q8：在使用foreach循环遍历集合元素时能否添加或删除元素？       √

> 使用foreach循环遍历元素集合时不能修改或删除元素，通过java -c查看字节码可以发现foreach循环实际上是用Iterator迭代器实现的，如果进行添加或删除元素会抛出ConcurrentModificationException异常，因为添加或删除元素会改变modCount的值，modCount是集合类的一个成员变量，代表集合的修改次数，当modCount的值和预期的exceptedModCount值不一致时就会抛出ConcurrentModificationException异常。

### Q9：Queue接口中的add()/offer()、remove()/poll()、element()/peek()方法有什么区别?                                      √

> ①add()和offer()都是向队列尾部插入一个元素，区别是当超出队列界限时，add方法会抛出异常，而offer()会返回false。
>
> ②remove()和poll()都是从队列头部移除一个元素并返回，区别是队列为空时remove()方法会抛出异常，poll()方法则是返回null值。
>
> ③element()和 peek() 都是用于查询队列头部的元素，区别时队列为空时， element() 抛出一个异常，而 peek() 返回 null。

### Q10：有哪些线程安全的集合类？                                          √

> ①Vector，是线程安全的ArrayList，底层用数组实现，通过synchronized修饰方法保证线程安全。
>
> ②HashTable，是线程安全的HashMap，继承自Dictionary，通过synchronized修饰方法保证线程安全，性能较差。
>
> ③ConcurentHashMap，线程安全的HashMap，通过分段锁实现线程安全，性能较好。

## 多线程 34

### Q1：创建线程有哪几种实现方式?分别有什么优缺点？       √重点

> ①继承Thread类，重写run()方法即可。优点是编码简单，缺点是不能继承其他类，功能单一。
>
> ②实现Runnable接口，重写run()方法，并将该实现类作为参数传入Thread构造器。优点是可以继承其他类，避免了单继承的局限性；适合多个相同程序代码的线程共享一个资源（同一个线程任务对象可被包装成多个线程对象），实现解耦操作，代码和线程独立。缺点是实现相对复杂。
>
> ③实现Callable接口，重写call()方法，并包装成FutureTask对象，再作为参数传入Thread构造器。优点是相比方式二可以获取返回值，缺点是实现复杂。
>
> ④可以通过线程池创建。

### Q2：线程有哪些状态？                                                   √重点

> ①New：用new操作创建一个新线程，此时程序还未开始运行线程中的代码。
>
> ②Runnable：调用start()方法后进入可运行状态。
>
> ③Blocked：阻塞状态，内部锁（不是juc中的锁）获取失败时进入阻塞状态。
>
> ④Waiting：等待其他线程唤醒时进入等待状态。
>
> ⑤Timed Waiting：计时等待，带超时参数的方法，例如sleep(long time)。
>
> ⑥Terminated：终止状态，线程正常运行完毕或被未捕获异常终止。

### Q3：什么是线程安全问题，如何解决？                           √

> 当多个线程对同一个共享变量进行操作时可能会产生的问题。解决方法：
>
> ①使用内部锁synchronized，可以使用同步代码块，如果是普通方法可用this作为锁对象，如果是静态方法，可以用类.class作为锁，或者使用同步方法底层和同步代码块一样，如果是实例方法默认用this作为锁，如果是静态方法默认使用类.class。
>
> ②使用java.util.concurrent包中的锁，例如ReentrantLock。

### Q4：多线程不可见问题的原因和解决方式？               √ 重点

> ①不可见的原因是每个线程有自己的工作内存，线程都是从主内存拷贝共享变量的副本值。每个线程都是在自己的工作内存操作共享变量的。
>
> ②解决方式：加锁：获得锁后线程会清空工作内存，从主内存拷贝共享变量最新的值成为副本，修改后刷新回主内存，再释放锁；使用volatile关键字：被volatile修饰的变量会通知其他线程之前读取到的值已失效，线程会加载最新值到自己的工作内存。

### Q5：说一说volatile关键字的作用                            √

> ①保证被修饰的变量对所有线程可见，在一个线程修改了变量的值后，新的值对于其他线程是可以立即获取的。
>
> ②禁止指令重排序，被修饰的变量不会被缓存在寄存器中或者对其他处理器不可见的地方，因此在读取volatile修饰的变量时总是会返回最新写入的值。
>
> ③不会执行加锁操作，不会导致线程阻塞，主要适用于一个变量被多个线程共享，多个线程均可对这个变量执行赋值或读取的操作。
>
> ④volatile可以严格保证变量的单次读写操作的原子性，但并不能保证像i++这种操作的原子性，因为i++在本质上是读、写两次操作。

### Q6：说一说synchronized关键字的作用                    √

> ①用于为Java对象、方法、代码块提供线程安全的操作，属于排它的悲观锁，也属于可重入锁。
>
> ②被synchronized修饰的方法和代码块在同一时刻只能有一个线程访问，其他线程只有等待当前线程释放锁资源后才能访问。
>
> ③Java中的每个对象都有一个monitor监视器对象，加锁就是在竞争monitor，对代码块加锁是通过在前后分别加上monitorenter和monitorexit指令实现的，对方是否加锁是通过一个标记位来判断的。

### Q7：synchronized的内部都包括哪些区域？          √

> synchronized内部包括6个不同的区域，每个区域的数据都代表锁的不同状态。
>
> ①ContentionList：锁竞争队列，所有请求锁的线程都被放在竞争队列中。
>
> ②EntryList：竞争候选列表，在锁竞争队列中有资格成为候选者来竞争锁资源的线程被移动到候选列表中。
>
> ③WaitSet：等待集合，调用wait方法后阻塞的线程将被放在WaitSet。
>
> ④OnDeck：竞争候选者，在同一时刻最多只有一个线程在竞争锁资源，该线程的状态被称为OnDeck。
>
> ⑤Owner：竞争到锁资源的线程状态。
>
> ⑥!Owner：释放锁后的状态。

### Q8：简述synchronized的实现原理                    √

> ①收到新的锁请求时首先自旋，如果通过自旋也没有获取锁资源，被放入ContentionList（该做法对于已经进入队列的线程是不公平的，体现了synchronized的不公平性）。
>
> ②为了防止ContentionList尾部的元素被大量线程进行CAS访问影响性能，Owner线程会在是释放锁时将ContentionList的部分线程移动到EntryList并指定某个线程（一般是最先进入的）为OnDeck线程。Owner并没有将锁直接传递给OnDeck线程而是把锁竞争的权利交给他，该行为叫做竞争切换，牺牲了公平性但提高了性能。
>
> ③获取到锁的OnDeck线程会变为Owner线程，未获取到的仍停留在EntryList中。
>
> ④Owner线程在被wait阻塞后会进入WaitSet，直到某个时刻被唤醒再次进入EntryList。
>
> ⑤ContentionList、EntryList、WaitSet中的线程均为阻塞状态。
>
> ⑥当Owner线程执行完毕后会释放锁资源并变为!Owner状态。

### Q9：JDK对synchronized做了哪些优化？               √

> JDK1.6中引入了适应自旋、锁消除、锁粗化、轻量级锁以及偏向锁等以提高锁的效率。锁可以从偏向锁升级到轻量级锁，再升级到重量级锁，这种过程叫做锁膨胀。JDK1.6中默认开启了偏向锁和轻量级锁，可以通过-XX:UseBiasedLocking禁用偏向锁。

### Q10：volatile和synchronized的区别？                       √重点

> ①volatile只能修饰实例变量和类变量,而synchronized可以修饰方法以及代码块。
>
> ②volatile只能保证数据的可见性，但是不保证原子性，synchronized是一种排它机制，可以保证原子性。只有在特殊情况下才适合取代synchronized：对变量的写操作不依赖于当前值（例如i++），或者是单纯的变量赋值；该变量没有被包含在具有其他变量的不等式中，不同的volatile变量不能互相依赖，只有在状态真正独立于程序内的其它内容时才能使用volatile。
>
> ③volatile是一种轻量级的同步机制，在访问volatile修饰的变量时并不会执行加锁操作，线程不会阻塞，使用synchronized加锁会阻塞线程。

### Q11：讲一讲ReentrantLock                               √重点

> ①ReentrantLock是Lock接口的实现类，是一个可重入式的独占锁，通过AQS实现。
>
> ②支持公平锁与非公平锁，还提供了**可响应中断锁**（线程在等待锁的过程中可以根据需要取消对锁的请求，通过interrupt方法中断）、**可轮询锁**（通过tryLock获取锁，如果有可用锁返回true否则立即返回false）、**定时锁**（通过带long时间参数的tryLock方法获取锁，如果在给定时间内获取到可用锁且当前线程未被中断返回true，如果超过指定时间则返回false，如果获取锁时被终断则抛出异常并清除已终止状态）等避免死锁的方法。
>
> ③通过lock和unlock方法显式地加锁和释放锁。

### Q12：synchronized和ReentrantLock有哪些区别？       √

> ①synchronized是隐式锁，ReentrantLock是显式锁，使用时必须在finally代码块中进行释放锁的操作。
>
> ②synchronized是非公平锁，ReentrantLock可以实现公平锁。
>
> ③ReentrantLock可响应中断，可轮回，为处理锁提高了更多灵活性。
>
> ④synchronized是一个关键字，是JVM级别，ReentrantLock是一个接口，是API级别。
>
> ⑤synchronized采用悲观并发策略，ReentrantLock采用的是乐观并发策略，会先尝试以CAS方式获取锁。

### Q13：Lock接口有哪些方法？                             √

> ①lock()：给对象加锁。
>
> ②tryLock()/tryLock(long time,TimeUnit unit)：尝试给对象加锁，成功返回true，可以无参也可以指定等待时间。
>
> ③unlock()：释放锁，锁只能由持有者释放否则抛出异常。
>
> ④newCondition()：创建条件对象，使用条件对象管理那些已经获得锁但不满足有效条件的线程，调用await()方法把线程进入等待集，调用sign()/signAll()解除阻塞。
>
> ⑤lockInterruptibly()：如果当前线程未被中断则获取该锁。

### Q14：Java中的锁有什么作用？有哪些分类？               √

> ①Java中的锁主要用于保障多并发情况下数据的一致性，线程必须先获取锁才能进行操作，可以保证数据的安全。
>
> ②从乐观和悲观的角度可以分为乐观锁和悲观锁。
>
> ③从获取资源的公平性可以分为公平锁和非公平锁。
>
> ④从是否共享资源的角度可以分为共享锁和排它锁。
>
> ⑤从锁的状态角度可分为偏向锁、轻量级锁和重量级锁。同时在JVM中还设计了自旋锁以更快地使用CPU资源。

### Q15：讲一讲乐观锁和悲观锁                              √

> ①乐观锁采用乐观的思想处理数据，在每次读取数据时都认为别人不会修改该数据，所以不会上锁。但在更新时会判断在此期间别人有没有更新该数据，通常采用在写时先读出当前版本号然后加锁的方法，具体过程为：比较当前版本号与上一次的版本号，如果一致则更新，否则重复进行读、比较、写操作。Java中的乐观锁是基于CAS操作实现的，CAS是一种原子性操作，在对数据更新之前先比较当前值和传入的值是否一样，一样则更新否则直接返回失败状态。
>
> ②悲观锁采用悲观的思想处理数据，每次读取数据时都认为别人会修改数据，所以每次都会上锁，其他线程将被阻塞。Java中的悲观锁基于AQS实现，该框架下的锁会先尝试以CAS乐观锁去获取锁，如果获取不到则会转为悲观锁。

### Q16：讲一讲自旋锁                                         √

> ①自旋锁认为如果持有锁的线程能在很短的时间内释放锁资源，那么那些等待竞争锁的线程就不需要做内核态和用户态之间的切换进入阻塞、挂起状态，只需等待小段时间，在等待持有锁的线程释放锁后即可立即获取锁，这样就避免了用户线程在内核态的切换上导致锁时间消耗。
>
> ②优点：减少CPU的上下文切换，对于占用锁时间非常短或锁竞争不激烈的代码块来说性能很高。
>
> ③缺点：在持有锁的线程长时间占用锁或竞争过于激烈时，线程会长时间自旋浪费CPU资源，有复杂锁依赖的情况不适合使用自旋锁。

### Q17：讲一讲公平锁与非公平锁                      √

> ①公平锁指在分配锁前检查是否有线程在排队等待获取该锁，优先将锁分配给排队时间最长的线程。
>
> ②非公平锁指在分配锁时不考虑线程排队等待的情况，直接尝试获取锁，获取不到锁就在排到队尾等待。
>
> ③因为公平锁需要在多核情况下维护一个锁线程等待队列，基于该队列进行锁的分配，因此效率比非公平锁低很多。synchronized是非公平锁，ReentrantLock默认的lock方法也是非公平锁。

### Q18：讲一讲读写锁                                 √

> ①Lock接口提供的锁是普通锁，为了提高性能Java提供了读写锁，读写锁分为读锁和写锁，读锁之间不互斥，读锁与写锁，写锁之间都互斥。
>
> ②如果系统要求共享数据可以同时支持很多线程并发读，但不能支持很多线程并发写，那么读锁能大大提高效率。如果系统要求共享数据在同一时刻只能有一个线程在写，且写的过程中不能读，则需要使用写锁。
>
> ③提高juc的locks包中ReadWriteLock的实现类ReentrantReadWriteLock的readLock()和writeLock()来分别获取读锁和写锁。

### Q19：讲一讲共享锁与排它锁                          √

> ①共享锁：允许多个线程同时获取该锁，并发访问共享资源，ReentrantReadWriteLock的读锁为共享锁的实现。
>
> ②排它锁：也叫互斥锁 ，每次只允许有一个线程独占该锁，ReentrantLock为排它锁的实现。
>
> ③排它锁是一种悲观的加锁策略，同一时刻只允许一个线程读取锁资源，限制了读操作的并发性，因为并发读线程并不会影响数据的一致性，因此共享锁采用了乐观的加锁策略，允许多个执行读操作的线程同时访问共享资源。

### Q20：锁有哪些状态？                                    √

> ①无锁，偏向锁，轻量级锁和重量级锁。
>
> ②偏向锁用于在某个线程获取某个锁后，消除这个线程锁重入的开销，看起来似乎是这个线程得到了锁的偏袒。偏向锁的主要目的是在同一个线程多次获取某个所的情况下尽量减少轻量级锁的执行路径，因为轻量级锁需要多次CAS操作，而偏向锁只需要切换ThreadID时执行一次CAS操作，提高效率。出现多线程竞争锁时，JVM会自动撤销偏向锁。偏向锁是进一步提高轻量级锁性能的。
>
> ③轻量级锁是相对于重量级锁而言的，核心设计实在没有多线程竞争的前提下，减少重量级锁的使用来提高性能。适用于线程交替执行同步代码块的情况，如果同一时刻有多线程访问同一个锁，会导致轻量级锁膨胀成重量级锁。
>
> ④重量级锁是基于操作系统互斥量实现的，会导致进程在用户态和内核态之间来回切换，开销较大，synchronized内部基于监视器实现，监视器基于底层操作系统实现，因此属于重量级锁，运行效率不高。JDK1.6后为了减少获取锁和释放锁带来的性能消耗提高性能，引入了偏向锁和轻量级锁。
>
> ⑤随着锁竞争越来越严重，锁可能从偏向锁升级到轻量级锁再到重量级锁，但在Java中只会单向升级不会降级。

### Q21：如何进行锁优化？                                √

> ①减少锁持有的时间：只在有线程安全要求的程序上加锁来尽量减少同步代码块对锁的持有时间。
>
> ②减小锁粒度：将单个耗时较多的锁操作拆分为多个耗时较少的锁操作来增加锁的并行度，减少同一个锁上的竞争。在减少锁的竞争后，偏向锁、轻量级锁的使用率才会提高，例如ConcurrentHashMap中的分段锁。
>
> ③读分离：指根据不同的应用场景将锁的功能进行分离以应对不同的变化，最常见的锁分离思想就是读写锁，这样既保证了线程安全又提高了性能。
>
> ④锁粗化：指为了保障性能，会要求尽可能将锁的操作细化以减少线程持有锁的时间，但如果锁分的太细反而会影响性能提升，这种情况下建议将关联性强的锁操作集中处理。
>
> ⑤锁消除：注意代码规范，消除不必要的锁来提高性能。

### Q22：线程池是什么？为什么需要线程池？                     √

> ①在生产中为每一个任务创建一个线程存在一些缺陷，如果无限制地大量创建线程会消耗很多资源，影响系统稳定性和性能，产生内存溢出等问题。
>
> ②线程池是管理一组同构工作线程的资源池，线程池与工作队列密切相关，工作队列中保存了所有需要等待执行的任务。工作线程的任务很简单，从工作队列获取任务，执行任务，返回线程池并等待下一次任务。
>
> ③线程池通过重用现有的线程，可以在处理多个请求时分摊线程在创建和撤销过程中的开销，另一个好处是当请求到达时工作线程通常已经存在，不会出现等待线程而延迟的任务的执行，提高了响应性。通过调整线程池的大小，可以创建足够多的线程保持处理器处于忙碌状态，同时还可以防止线程过多导致内存资源耗尽。

### Q23：创建线程池时，ThreadPoolExecutor构造器中都有哪些参数，有什么含义？                        √

> ①corePoolSize： 线程池核心大小，即在没有任务执行时线程池的大小，并且只有在工作队列满了的情况下才会创建超出这个数量的线程。
>
> ②maximumPoolSize： 线程池最大大小，表示可同时活动的线程数量的上限。
>
> ③keepAliveTime：存活时间，如果某个线程的空闲时间超过了存活时间，那么将被标记为可回收的，并且当线程池的当前大小超过基本大小时，这个线程将被终止。
>
> ④unit： 存活时间的单位，可选的参数为TimeUnit枚举中的几个静态变量： NANOSECONDS、MICROSECONDS、MILLISECONDS、SECONDS。
>
> ⑤workQueue： 线程池所使用的阻塞队列。
>
> ⑥thread factory：线程池使用的创建线程工厂方法，可省略，将使用默认工厂。
>
> ⑦handler：所用的拒绝执行处理策略，可省略，将使用默认拒绝执行策略。

### Q24：线程池的阻塞队列有哪些选择？       √

> ①ArrayBlockingQueue：基于数组的有界阻塞队列。
>
> ②LinkedBlockingQueue：基于链表的有界阻塞队列。
>
> ③PriorityBlockingQueue：支持优先级排序的无界阻塞队列。
>
> ④DelayedWorkQueue：基于优先级队列的无界阻塞队列。
>
> ⑤SynchronousQueue：队列内部仅允许容纳一个元素，用于控制互斥的阻塞队列。

### Q25：线程池的拒绝执行策略有哪些选择?       √

> ①AbortPolicy()： 线程池默认的拒绝策略，抛出RejectedExecutionException异常。
>
> ②CallerRunsPolicy(): 重试添加当前的任务，他会自动重复调用execute()方法。
>
> ③DiscardOldestPolicy(): 抛弃旧的任务，加入新的任务。
>
> ④DiscardPolicy(): 直接抛弃当前的任务。

### Q26：创建线程池的方法有哪些？       √

> 可以通过Executors的静态工厂方法创建线程池，内部通过重载ThreadExecutorPool不同的构造器创建线程池。
>
> ①newFixedThreadPool，创建一个固定长度的线程池，每当提交一个任务就创建一个线程，直到达到线程池的最大数量，这时线程池的规模将不再变化(如果某个线程由于发生了未预期的异常而结束，那么线程池会补充一个新的线程)。将线程池的核心大小和最大大小都设置为参数中指定的值，创建的线程不会超时，使用LinkedBlockingQueue。
>
> ②newCachedThreadPool，创建一个可缓存的线程池，如果线程池的当前规模超过了处理器需求，那么将回收空闲的线程，而当需求增加时，可以添加新的线程，线程池的规模不存在任何限制。将线程池的最大大小设置为Integer.MAX_VALUE，而将核心大小设置为0，并将超时设为1分钟，使用SynchronousQueue，这种方法创建出的线程池可被无限扩展，并当需求降低时自动收缩。
>
> ③newSingleThreadExecutor，一个单线程的Executor，创建单个工作者线程来执行任务，如果这个线程异常结束，会创建另一个线程来代替。确保依照任务在队列中的顺序来串行执行。将核心线程和最大线程数都设置为1，使用LinkedBlockingQueue。
>
> ④newScheduledThreadPool，创建一个固定长度的线程池，而且以延迟或定时的方式来执行任务，类似于Timer，使用DelayedWorkQueue。

### Q27：线程池的工作原理？       √

> ①线程池刚创建时，里面没有一个线程。任务队列是作为参数传进来的。即使队列里面有任务，线程池也不会马上执行它们。
>
> ②通过 execute(Runnable command)方法被添加到线程池，任务就是一个 Runnable类型的对象，任务的执行方法就是Runnable类型对象的run()方法。
>
> ③如果workerCount<corePoolSize，那么创建并启动一个线程执行新提交的任务。如果workerCount>=corePoolSize，且线程池内的阻塞队列未满，那么将这个任务放入队列。如果workerCount>=corePoolSize，且阻塞队列已满，若满足workerCount<maximumPoolSize,那么还是要创建并启动一个线程执行新提交的任务。若阻塞队列已满，并且workerCount>=maximumPoolSize，则根据 handler所指定的策略来处理此任务，默认的处理方式直接抛出异常。也就是处理任务的优先级为： 核心线程corePoolSize、任务队列workQueue、最大线程maximumPoolSize，如果三者都满了，使用handler处理被拒绝的任务。
>
> ④当一个线程完成任务时，它会从队列中取下一个任务来执行。
>
> ⑤当一个线程没有任务可执行，超过一定的时间（keepAliveTime）时，线程池会判断，如果当前运行的线程数大于corePoolSize时，那么这个线程会被停用掉，所以线程池的所有任务完成后，它最终会收缩到corePoolSize的大小。

### Q28：简述ExecutorService的生命周期       √

> ①ExecutorService的生命周期有3种状态：运行、关闭和已终止。
>
> ②ExecutorService在初始创建时处于运行状态。
>
> ③shutdown方法将执行平缓的关闭过程：不再接受新的任务，同时等待已经提交的任务执行完成——包括那些还未开始执行的任务。shutdownNow方法将执行粗暴的关闭过程：它将尝试取消所有运行中的任务，并且不再启动队列中尚未开始执行的任务。在ExecutorService关闭后提交的任务将有“拒绝执行处理器REH”来处理，它会抛弃任务，或者使得execute方法抛出一个未检查的RejectedExecutionException。
>
> ④等所有任务都完成后，ExecutorService将转入终止状态。可以调用awaitTermination来等待ExecutorService到达终止状态，或者通过调用isTerminated来轮询ExecutorService是否已终止。通常在调用awaitTermination后会理解调用shutdown，从而产生同步地关闭ExecutorService的效果。

### Q29：什么是CAS？

> ①CAS指Compare And Swap，比较并交换。CAS(V,E,N)算法包括三个参数，V表示要更新的变量的值，E表示预期的值，N表示新值。在且仅在V的值和E相等时才会将V的值设置为N，如果不同则说明已经有其他线程做了更改，当前线程就什么也不做。最后CAS返回当前V的真实值。
>
> ②CAS操作采用了乐观锁的思想，有多个线程同时使用CAS操作一个共享变量时只有一个线程会成功，失败的线程不会被挂起仅会被告知失败，并且允许再次尝试，或者放弃操作。基于这样的原理虽然CAS没有使用锁，也可以及时发现其他线程的操作进行适当地并发处理。

### Q30：CAS有什么问题？（什么是ABA问题？）如何解决？

> ①CAS算法地实现有一个重要前提：需要取出内存中某时刻的数据，然后在下一刻进行比较、替换，但在这个时间差内数据可能已经发生了变化，导致ABA问题。
>
> ②ABA问题指线程1从内存V位置取出A，这时线程2也从内存中取出A，并将其首先修改为B，接着又修改为A，这时线程1在进行CAS操作时会发现内存中数据仍是A，然后线程1操作成功。尽管从操作角度来说线程1成功了，但是在该过程中实际上数据已发生了变化但并未被感知到，某些应用场景下可能会出现数据不一致的问题。
>
> ③乐观锁通过版本号来解决ABA问题，具体的操作是每次执行数据修改操作时都会带上一个版本号，如果预期版本号和数据版本号一致就进行操作，并将版本号加1，否则执行失败。

### Q31：讲一讲wait、sleep、yield、join方法的区别

> ①wait是Object类的方法，调用wait方法的线程会进入WAITING状态，只有等待其他线程的通知或被中断后才会解除阻塞，调用wait方法会释放锁资源。
>
> ②sleep是Thread类的方法，调用sleep方法会导致当前线程进入休眠状态，与wait不同的是该方法不会释放锁资源，进入的是TIMED-WAITING状态。
>
> ③yiled方法会使当前线程让出CPU时间片给优先级相同或更高的线程，回到RUNNABLE状态，与其他线程一起重新竞争CPU时间片。
>
> ④join方法用于等待其他线程运行终止，如果当前线程调用了另一个线程的join方法，则当前线程进入阻塞状态，当另一个线程结束时当前线程才能从阻塞状态转为就绪态，等待获取CPU时间片。底层使用的是wait，也会释放锁。

### Q32：讲一讲线程中断

> ①interrupt方法用于向线程发送一个终止信号，会影响该线程内部的中断标识位，这个线程本身不会因为调用了interrupt方法而改变状态，状态的具体变化需要等待接收到中断标识的程序的处理结果判定。
>
> ②调用interrupt方法不会中断一个正在运行的线程，只会改变内部的中断标识位的值为true。
>
> ③当调用sleep方法使线程处于TIMED-WAITING状态使，调用interrupt方法会抛出InterruptedException，使线程提前结束TIMED-WAITING状态。在抛出该异常前将清除中断标识位，所以在抛出异常后调用isInterrupted方法返回的值是false。
>
> ④中断状态是线程固有的一个标识位，可以通过此标识位安全终止线程。比如想终止某个线程时，先调用interrupt方法然后在run方法中根据该线程isInterrupted方法的返回值安全终止线程。

### Q33：什么是守护线程？                         √

> ①守护线程是运行在后台的一种特殊线程，独立于控制终端并且周期性地执行某种任务或等待处理某些已发生的事件。守护线程不依赖于终端，但是依赖于JVM，当JVM中仅剩下守护线程时，JVM就会退出。
>
> ②通过setDaemon方法定义一个守护线程，守护线程的优先级较低，将一个用户线程设置为守护线程必须要在启动守护线程之前。

### Q34：start和run方法的区别？                               √

> ①start方法用于启动线程，真正实现了多线程，调用了start方法后，会在后台创建一个新的线程来执行，不需要等待run方法执行完毕就可以继续执行其他代码。调用start方法时，该线程处于就绪状态，并没有开始运行。
>
> ②run方法也叫做线程体，包含了要执行的线程的逻辑代码，在调用run方法并没有创建新的线程，而是直接运行run方法中的代码。

## JVM 15

### Q1：类的加载机制是什么?                       √

> 类加载到内存中主要有5个阶段，分别为
>
> ①加载：将Class文件读取到运行时数据区的方法区内，在堆中创建Class对象，并封装类在方法区的数据结构的过程。
>
> ②验证：主要用于确保Class文件符合当前虚拟机的要求，保障虚拟机自身的安全，只有通过验证的Class文件才能被JVM加载。
>
> ③准备：主要工作是在方法区中为类变量分配内存空间并设置类中变量的初始值。
>
> ④解析：将常量池中的符号引用替换为直接引用。
>
> ⑤初始化：主要通过执行类构造器的<clinit>方法为类进行初始化，该方法是在编译阶段由编译器自动收集类中静态代码块和变量的赋值操作组成的。JVM规定，只有在父类的<clinit>方法都执行成功后，子类的方法才可以被执行。在一个类中既没有静态变量赋值操作也没有静态代码块时，编译器不会为该类生成<clinit>方法。

### Q2：有哪些类加载器，类加载器的加载模型是什么，有什么好处？    √

> ①主要有**启动类加载器**，负责加载JAVA_HOME/lib中的类库；**扩展类加载器**，负责加载JAVA_HOME/lib/ext中的类库；**应用程序类加载器**，也称系统类加载器，负责加载用户类路径上指定的类库；也可以自定义类加载器。
>
> ②类加载器之间的层次关系叫做双亲委派模型，要求除了顶层的启动类加载器外其余的类加载器都应当有自己的父类加载器。一个类收到类加载请求后会层层找父类加载器去尝试加载，因此所有的加载请求最终都会被传送到顶层的启动类加载器，只有当父类加载器反馈自己无法完成加载时子加载器才会尝试自己去加载。
>
> ③双亲委派模型的好处是保障类加载的唯一性和安全性，例如加载rt.jar包中的java.lang.Object，无论哪一个类加载最终都会委托给启动类加载器，这样就保证了类加载的唯一性。如果存在包名和类名都相同的两个类，那么该类就无法被加载。

### Q3：简述JVM的内存区域                   √重点

> JVM的内存区域分为线程私有区域（程序计数器、虚拟机栈、本地方法栈）、线程共享区域（堆、方法区）和直接内存。
>
> ①程序计数器是一块很小的内存空间，用于存储当前线程执行字节码文件的行号指示器。
>
> ②虚拟机栈是描述Java方法执行过程的内存模型，帧栈中存储了局部变量表，操作数栈，动态链接，方法出口等信息。
>
> ③本地方法栈，和虚拟机栈作用类似，区别是虚拟机栈为Java方法服务，本地方法栈为Native方法服务。
>
> ④JVM运行过程中创建的对象和生成的数据都存储在堆中，堆是被线程共享的内存区域，也是垃圾回收最主要的内存区域。
>
> ⑤方法区用来存储常量，静态变量、类信息、即时编译器编译后的机器码、运行时常量池等数据。

### Q4：哪些情况下类不会初始化？                  √

> ①常量在编译时会存放在使用该常量的类的常量池，该过程不要调用常量所在的类，不会初始化。
>
> ②子类引用父类的静态变量时，子类不会初始化，只有父类会初始化。
>
> ③定义对象数组，不会触发该类的初始化。
>
> ④在使用类名获取Class对象时不会触发类的初始化。
>
> ⑤在使用Class.forName()加载指定的类时，可以通过initialize参数设置是否需要初始化。
>
> ⑥在使用ClassLoader默认的loadClass方法加载类时不会触发该类的初始化。

### Q5：哪些情况下类会初始化？                            √

> ①创建类的实例。
>
> ②访问某个类或接口的静态变量，或对该静态变量赋值。
>
> ③调用类的静态方法。
>
> ④初始化一个类的子类时（初始化子类，父类必须先初始化）。
>
> ⑤JVM启动时被标为启动类的类。
>
> ⑥使用反射进行方法调用时。

### Q6：谈谈JVM的运行时内存                                   √

> JVM的运行时内存也叫做JVM堆，从GC角度更将其分为新生代，老年代和永久代。
> 其中新生代默认占1/3堆空间，老年代默认占2/3堆空间，永久代占非常少的堆空间。
> 新生代又分为Eden区、ServivorFrom区和ServivorTo区，Eden区默认占8/10新生代空间，ServivorFrom区和ServivorTo区默认分别占1/10新生代空间。

### Q7：谈谈新生代是怎么分区的                                   √

> ①JVM新创建的对象（除了大对象外）会被存放在新生代，默认占1/3堆内存空间。由于JVM会频繁创建对象，所以新生代会频繁触发MinorGC进行垃圾回收。
>
> ②新生代又分为Eden区，ServivorFrom区和ServivorTo区。
>
> ③Eden区：Java新创建的对象首先会被存放在Eden区，如果新创建的对象属于大对象，则直接将其分配到老年代。大对象的定义和具体的JVM版本、堆大小和垃圾回收策略有关，一般为2KB~128KB，可通过-XX:PretenureSizeThreshold设置其大小。在Eden区的内存空间不足时会触发MinorGC，对新生代进行一次垃圾回收。②ServivorTo区：保留上一次MinorGC时的幸存者。③ServivorFrom区：将上一次MinorGC时的幸存者作为这一次MinorGC的被扫描者。

### Q8：谈谈新生代的垃圾回收机制                         √

> 新生代的GC过程叫做MinorGC，采用复制算法实现，具体过程如下：
>
> ①把在Eden区和ServivorFrom区中存活的对象复制到ServivorTo区，如果某对象的年龄达到老年代的标准，则将其复制到老年代，同时把这些对象的年龄加1。如果ServivorTo区的内存空间不够，则也直接将其复制到老年代。如果对象属于大对象，则也直接复制到老年代。
>
> ②清空Eden区和ServivorFrom区中的对象。
>
> ③将ServivorFrom区和ServivorTo区互换，原来的ServivorTo区成为下一次GC时的ServivorFrom区。

### Q9：谈谈老年代的垃圾回收机制                             √ 

> ①老年代主要存放有长生命周期的对象和大对象，老年代的GC叫MajorGC。
>
> ②在老年代，对象比较稳定，MajorGC不会频繁触发。在进行MajorGC前，JVM会进行一次MinorGC，过后仍然出现老年代空间不足或无法找到足够大的连续内存空间分配给新创建的大对象时，会触发MajorGC进行垃圾回收，释放JVM的内存空间。
>
> ③MajorGC采用标记清除算法，该算法首先会扫描所有对象并标记存活的对象，然后回收未被标记的对象，并释放内存空间。因为要先扫描老年代的所有对象再回收，所以MajorGC的时间较长。容易产生内存碎片，在老年代没有内存空间可分配时，会出现内存溢出异常。

### Q10：谈一谈永久代                          					 √

> ①永久代指内存的永久保存区域，主要存放Class和Meta（元数据）的信息。Class在类加载时被放入永久代。
>
> ②永久代和老年代、新生代不同，GC不会在程序运行期间对永久代的内存进行清理，这也导致了永久代的内存会随着加载的Class文件的增加而增加，在加载的Class文件过多时会出现内存溢出异常，比如Tomcat引用jar文件过多导致JVM内存不足而无法启动。
>
> ③在JDK1.8中，永久代已经被元数据区取代。元数据区的作用和永久代类似，二者最大的区别在于：元数据区并没有使用虚拟机的内存，而是直接使用操作系统的本地内存。因此元空间的大小不受JVM内存的限制，只和操作系统的内存有关。
>
> ④在JDK1.8中，JVM将类的元数据放入本地内存中，将常量池和类的静态常量放入Java堆中，这样JVM能够加载多少元数据信息就不再由JVM的最大可用内存空间决定，而由操作系统的实际可用内存空间决定。

### Q11：如何确定对象是否是垃圾？                   √       重点

> ①Java采用引用计数法和可达性分析来确定对象是否应该被回收。引用计数法容易产生循环引用的问题，可达性分析通过根搜索算法实现。根搜索算法以一系列GC Roots的点作为起点向下搜索，在一个对象到任何GC Roots都没有引用链相连时，说明其已经死亡。根搜索算法主要针对栈中的引用、方法区的静态引用和JNI中的引用展开分析。
>
> ②引用计数法：在Java中如果要操作对象，就必须先获取该对象的引用，因此可以通过引用计数法来判断一个对象是否可以被回收。在为对象添加一个引用时，引用计数加1；在为对象删除一个引用时，引用计数减1；如果一个对象的引用计数为0，则表示此刻该对象没有被引用，可以被回收。引用计数法容易产生循环引用问题，循环引用指两个对象相互引用，导致它们的引用一直存在，而不能被回收。
>
> ③可达性分析：为了解决引用计数法的循环引用问题，Java还采用了可达性分析来判断对象是否可以被回收。具体做法是首先定义一些GC Roots对象，然后以这些GC Roots对象作为起点向下搜索，如果在GC Roots和一个对象之间没有可达路径，则称该对象是不可达的。不可达对象要经过至少两次标记才能判断其是否可被回收，如果两次标记后该对象仍然不可达，则将被垃圾回收器回收。

### Q12：有哪些GC算法？分别有什么特点？                  √       重点？

> ①标记清除算法：标记出所有需要回收的对象，然后清除可回收的对象。效率较低，并且因为在清除后没有重新整理可用的内存空间，如果内存中可被回收的小对象居多，会引起内存碎片化问题。
>
> ②复制算法：将可用内存分为区域1和区域2，将新生成的对象放在区域1，在区域1满后对区域1进行一次标记，将标记后仍然存活的对象复制到区域2，然后清除区域1。效率较高并且易于实现，解决了内存碎片化的问题，缺点是浪费了大量内存，同时在系统中存在长生命周期对象时会在两区域间来回复制影响系统效率。
>
> ③标记压缩算法：结合了标记清除算法和复制算法的优点，标记过程和标记清除算法一样，标记后将存活的对象移动到一端，清理另一端。
>
> ④分代收集算法：根据对象不同类型把内存划分为不同区域，把堆划分为新生代和老年代。由于新生代的对象生命周期较短，主要采用复制算法。将新生代划分为一块较大的Eden区和两块较小的Survivor区，Servivor区又分为ServivorTo和ServivorFrom区。JVM在运行过程中主要使用Eden和SurvivorFrom区，进行垃圾回收时将这个两个区域存活的对象复制到SurvivorTo区并清除这两个区域。老年代主要存储长生命周期的大对象，因此采用标记清除或标记压缩算法。

### Q13：有哪些垃圾回收器？各自有什么特点?           ?

> ①Serial：单线程，基于复制算法，JVM运行在Client时默认的新生代垃圾收集器。
>
> ②ParNew：Serial的多线程实现，基于复制算法，JVM运行在Server时默认 的新生代垃圾收集器。
>
> ③Paraller Scavenge：多线程，基于复制算法，以吞吐量最大化为目标，允许较长时间的STW换取吞吐量。
>
> ④Serial Old：单线程，基于标记整理算法，是JVM运行在Client模式下默认的老年代垃圾回收器，可和Serial搭配使用。
>
> ⑤Parall Old：多线程，基于标记整理算法，优先考虑系统的吞吐量。
>
> ⑥CMS：多线程，基于标记清除算法，为老年代设计，追求最短停顿时间。主要有四个步骤：初始标记、并发标记、重新标记、并发清除。
>
> ⑥G1：将堆内存分为几个大小固定的独立区域，在后台维护了一个优先列表，根据允许的收集时间回收垃圾收集价值最大的区域。相比CMS不会产生内存碎片，并且可精确控制停顿时间。分为四个阶段：初始标记、并发标记、最终标记、筛选回收。

### Q14：Java中有哪些引用类型？                          ?

> ①强引用，最常见的引用类型，把一个对象指向一个引用变量时就是强引用。强引用的对象一定为可达性状态，所以不会被垃圾回收，是内存泄漏的主要原因。
>
> ②软引用，通过SoftReference实现，如果一个对象只有软引用，当内存空间不足时将被回收。
>
> ③弱引用，通过WeakReference实现，如果一个对象只有弱引用，在垃圾回收过程中一定会被回收。
>
> ④虚引用，通过PhantomReference实现，虚引用和引用队列联合使用，主要用来跟踪对象的垃圾回收过程。

### Q15：JVM有哪些内存回收与回收策略？                       ?

> ①对象优先在Eden区分配：大多数情况下对象在新生代Eden区分配，当Eden区没有足够空间时，虚拟机将发起一次MinorGC。
>
> ②大对象直接进入老年代：大对象是指需要大量连续内存空间的Java对象，如很长的字符串及数组。虚拟机提供了一个参数-XX:PretenureSizeThreshold，大于该值的对象会直接进入老年代，防止它在新生代之间来回复制。
>
> ③长期存活的对象进入老年代：虚拟机给每个对象定义了一个年龄计数器，若对象在Eden区出生、经过第一次MinorGC后仍存活且能被Survivor容纳，将被移到Survivor区并且对象年龄设为1。每经过一次MinorGC，年龄就加1。默认在年龄增加到15时晋升到老年代，可通过-XX:MaxTenuringThreshold设置晋升老年代的年龄阈值。
>
> ④动态对象年龄判定：如果在Survivor空间中相同年龄所有对象大小超过了该空间的一半，大于等于该年龄的对象就可以直接进入老年代而不用等到达到阈值。
>
> ⑤空间分配担保：发生MinorGC前，先判断老年代最大可用连续空间是否大于新生代所有对象的总空间，如果成立那么MinorGC是安全的。如果不成立会查看HandlePromotionFailure是否允许担保，如果允许会冒险进行MinorGC，否则改为一次FullGC。

## 反射与注解 3

### Q1：简述反射的基本概念，优缺点和使用场景。           √

> ①在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法，对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为Java的反射机制。
>
> ② 优点是运行时动态获取类的全部信息，缺点是破坏了类的封装性，泛型的约束性。
>
> ③是框架的核心灵魂，动态代理设计模式采用了反射机制，还有 Spring、Hibernate 等框架也大量使用到了反射机制。

### Q2：获取Class对象有哪几种方式？能通过Class对象获取类的哪些信息？ √

> ①通过类名.class
>
> ②通过对象.getClass()
>
> ③通过Class.forName(类的全限名)
>
> ④可以通过Class对象获取类的成员变量，方法或构造器。带declared的获取方法可以获取到类的一个或全部成员变量，方法，构造器，不带declared的方法只能获取到类的public修饰的成员变量、方法或构造器，包括父类public修饰的成员变量、方法或构造器。

### Q3：注解是什么，元注解是什么，有什么作用？                    √

> ①注解是一种标记，可以使类或接口附加额外的信息，是帮助编译器和JVM完成一些特定功能的。
>
> ②元注解就是自定义注解的注解，包括**@Target**：用来约束注解的位置，值是ElementType枚举类，包括METHOD方法、VARIABLE变量、TYPE类/接口、PARAMETER方法参数、CONSTRUCTORS构造器和LOACL_VARIABLE局部变量；**@Rentention**：用来约束注解的生命周期，值是RetentionPolicy枚举类，包括：SOURCE源码、CLASS字节码和RUNTIME运行时；**@Documented**：表明这个注解应该被javadoc工具记录；**@Inherited**：表面某个被标注的类型是被继承的。

## IO流 5

### Q1：简单说说File对象表示的是什么？File类有哪些常用方法?               √

> ①File对象表示的是操作系统上的文件或目录。
>
> ②获取：getAbsolutePath() 获取绝对路径；getPath() 获取文件定义时使用的路径；getName() 获取文件名，带后缀；length() 返回文件长度，单位是字节。
>
> ③判断：exists() 判断File对象表示的文件或目录是否存在；isDirectory() 判断是否是目录； isFile() 判断是否是文件。
>
> ④创建和删除：createNewFile() 不存在时创建新文件；delete() 删除文件，目录（非空目录不能删除）；mkdir() 创建一级目录；mkdirs() 创建多级目录，推荐使用；
>
> ⑤遍历：list 获取当前目录下所有一级文件名称到一个字符串数组并返回；listFiles 获取当前目录下所有一级File对象到File数组返回。

### Q2：英文、数字和中文字符在文件中分别占多大的空间？            √

> ①英文和数字在任何编码中都占1个字节。
>
> ②中文字符在GBK编码下占2个字节，在UTF-8编码下占3个字节。

### Q3：简述传统IO有哪些分类？            √

> ①按流的方向：输出流：把内存中的数据写出到磁盘文件或网络介质中；输入流：把磁盘文件或网络介质中的数据读取到内存中。
>
> ②按流的内容：字节流：流中数据的最小单位是字节；字符流：流中数据的最小单位是字符（针对文本内容）。顶层的抽象类包括InputStream、OutputStream、Reader、Writer，它们都实现了Closeable接口。
>
> ③缓冲流（BufferedInputStream/BufferedOutputStream/BufferedReader/BufferedWriter）：自带一个8KB大小的缓冲池，可以将字节/字符流为缓冲字节/缓冲字符流。
>
> ④字符转换流（InputStreamReader/OutputStreamWriter）：可以将对应的字节流转换为字符流。
>
> ⑤打印流：PrintStream，方便快速打印数据，参数是什么就打印什么。

### Q4：简述BIO、NIO、AIO的区别和原理

> ①BIO是同步阻塞的，数据的读写会阻塞在一个线程中，适用于连接数目比较小且固定的架构，对服务器资源要求高，JDK1.4前的唯一选择。
>
> ②NIO是同步非阻塞的，通过Selector监听Channel上事件的变化，在Channel上有数据发生变化时通知该线程进行读写操作。适用于连接数目比较多且连接比较短的架构，如聊天服务器，从 JDK1.4开始支持。
>
> ③AIO是异步非阻塞的，异步是指服务端线程接收到客户端管道后就交给底层处理IO通信，自己可以做其他事情。适用于连接数目比较多且连接比较长的架构，从JDK1.7开始支持。

### Q5：序列化和反序列化是什么，有什么要求？

> ①Java在JVM运行时被创建、更新和消耗，当JVM退出时，对象也会随之销毁。可以通过Java序列化实现持久化存储，保存对象及其状态信息到字节数组中。
>
> ②反序列化就是再将字节数组中存储的信息转换回Java对象。
>
> ③要求类必须实现序列化接口，并且序列化和反序列化必须保持序列化的ID一致。
>
> ④静态变量和被transient修饰的变量不会被序列化。
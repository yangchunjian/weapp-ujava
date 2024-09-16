const util = require("../utils/util");

module.exports = {

}

var detail= {
  "data": [
    {
      "title_id": 1,
      "detail": "`UJava`是一个功能丰富且易用的**Java架构设计**经验总结，意在帮助开发者快速、便捷地使用各类设计完成开发任务，以满足各类业务需求。",

    },
    {
      "title_id": 2,
      "detail": "持续更新中，网址：http://ujava.cn",

    },
    {
      "title_id": 3,
      "detail": "## [第一梯队思想](./first)\n" +
          "\n" +
          "- 编程\n" +
          "- 结构化\n" +
          "- 关注点分离\n" +
          "- 抽象\n" +
          "- 封装\n" +
          "- 复用\n" +
          "- 分治\n" +
          "- 组合\n" +
          "- 缓存\n" +
          "- 解耦\n" +
          "- 编码\n" +
          "- 协议\n" +
          "- 容错\n" +
          "- 自动化\n" +
          "- 预处理\n" +
          "- 时空权衡\n" +
          "- 统筹规划\n" +
          "\n" +
          "## [](#第二梯队思想)[第二梯队思想](./second)\n" +
          "\n" +
          "- 递归\n" +
          "- 索引\n" +
          "- 迭代\n" +
          "- 遍历\n" +
          "- 中断\n" +
          "- 回滚\n" +
          "- 模板\n" +
          "- 模式\n" +
          "- 代理\n" +
          "\n" +
          "## [](#第三梯队思想)[第三梯队思想](./third)\n" +
          "\n" +
          "- 管道\n" +
          "- 并发\n" +
          "- 并行\n" +
          "- 批量\n" +
          "- 异步\n" +
          "- 回调\n" +
          "- 延迟\n" +
          "- 定时\n" +
          "- 通知\n" +
          "- 阻塞\n" +
          "\n" +
          "## [](#第四梯队思想)[第四梯队思想](./four)\n" +
          "\n" +
          "- 面向过程编程\n" +
          "- 函数式编程\n" +
          "- 面向对象编程\n" +
          "- 面向过程与面向对象的区别\n",

    },
    {
      "title_id": 4,
      "detail": "## [设计模式的六大原则](#设计模式的六大原则)\n" +
          "\n" +
          "- 单一职责原则（SRP）：一个类只应该有一个引起它变化的原因。\n" +
          "- 开放封闭原则（OCP）：软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。`对扩展开放，对修改关闭`。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是`为了使程序的扩展性好，易于维护和升级`。想要达到这样的效果，我们需要使用接口和抽象类。\n" +
          "- 里氏替换原则（LSP）：子类型必须能够替换掉它们的父类型。里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，`任何基类可以出现的地方，子类一定可以出现`。LSP 是继承复用的基石，`只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为`。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。\n" +
          "- 依赖倒置原则（DIP）：高层模块不应该依赖于低层模块，两者都应该依赖于抽象接口；抽象接口不应该依赖于具体实现，具体实现应该依赖于抽象接口。是开闭原则的基础，具体内容：`针对接口编程，依赖于抽象而不依赖于具体`。\n" +
          "- 接口隔离原则（ISP）：不应该强迫一个类实现它不需要的接口，应该将接口拆分成更小和更具体的部分，以便客户端只需要知道它们感兴趣的部分。`使用多个隔离的接口，比使用单个接口要好`。它还有另外一个意思是：降低类之间的耦合度。便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。\n" +
          "- 迪米特法则（LOD）：一个对象应该对其他对象有尽可能少的了解，通常称为“最少知识原则”。又称最少知道原则，`一个实体应当尽量少地与其他实体之间发生相互作用`，使得系统功能模块相对独立。\n" +
          "- 合成复用原则（CRP）：尽量`使用合成/聚合的方式`，而不是使用继承。\n" +
          "\n" +
          "### [](#一、创建型模式)[一、创建型模式](./create)\n" +
          "\n" +
          "这种模式`提供了一种在创建对象的同时隐藏创建逻辑的方式`，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。包括（工厂模式，抽象工厂模式，单例模式，建造者模式，原型模式）\n" +
          "\n" +
          "- 1、单例模式（Singleton Pattern）\n" +
          "    - 1）饿汉式\n" +
          "    - 2）懒汉式，双检锁\n" +
          "    - 3）静态内部类\n" +
          "    - 4）枚举\n" +
          "- 2、原型模式（Prototype Pattern）\n" +
          "- 3、工厂模式（Factory Pattern）\n" +
          "- 4、抽象工厂模式（Abstract Factory Pattern）\n" +
          "- 5、建造者模式（Builder Pattern）\n" +
          "\n" +
          "### [](#二、结构型模式)[二、结构型模式](./structure)\n" +
          "\n" +
          "这种模式`关注类和对象的组合`。继承的概念被用来组合接口和定义组合对象获得新功能的方式。包括（适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式）\n" +
          "\n" +
          "- 1、适配器模式（Adapter Pattern）\n" +
          "- 2、组合模式（Composite Pattern）\n" +
          "- 3、装饰器模式（Decorator Pattern）\n" +
          "- 4、外观模式（Facade Pattern）\n" +
          "- 5、享元模式（Flyweight Pattern）\n" +
          "- 6、代理模式（Proxy Pattern）\n" +
          "    - 1）静态代理\n" +
          "    - 2）jdk动态代理\n" +
          "    - 3）cglib动态代理\n" +
          "- 7、桥接模式（Bridge Pattern）\n" +
          "\n" +
          "### [](#三、行为型模式)[三、行为型模式](./action)\n" +
          "\n" +
          "这些设计模式`特别关注对象之间的通信`。包括（策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式）\n" +
          "\n" +
          "- 1、责任链模式（Chain of Responsibility Pattern）\n" +
          "- 2、命令模式（Command Pattern）\n" +
          "- 3、解释器模式（Interpreter Pattern）\n" +
          "- 4、迭代器模式（Iterator Pattern）\n" +
          "- 5、观察者模式（Observer Pattern）\n" +
          "- 6、状态模式（State Pattern）\n" +
          "- 7、模板模式（Template Pattern）\n" +
          "- 8、中介者模式（Mediator Pattern）\n" +
          "- 9、备忘录模式（Memento Pattern）\n" +
          "- 10、访问者模式（Visitor Pattern）\n" +
          "- 11、策略模式（Strategy Pattern）\n",

    },
    {
      "title_id": 5,
      "detail": "- [规范安全](https://ujava.cn/standard/noun.html)\n" +
          "    \n" +
          "- [规范编程](https://ujava.cn/standard/security.html)\n" +
          "    \n" +
          "- [规范测试](https://ujava.cn/standard/project.html)\n" +
          "    \n" +
          "- [规范工程](https://ujava.cn/standard/database.html)\n" +
          "    \n" +
          "- [规范库表](https://ujava.cn/standard/exception.html)\n" +
          "    \n" +
          "- [规范码值](https://ujava.cn/standard/unit.html)\n" +
          "    \n" +
          "- [规范名词](https://ujava.cn/standard/errorcode.html)\n" +
          "    \n" +
          "- [规范设计](https://ujava.cn/standard/code.html)\n" +
          "    \n" +
          "- [规范异常](https://ujava.cn/standard/design.html)",

    },
    {
      "title_id": 6,
      "detail": "- [组件DevOps](https://ujava.cn/assembly/devops.html)\n" +
          "    \n" +
          "- [组件Dubbo](https://ujava.cn/assembly/dubbo.html)\n" +
          "    \n" +
          "- [组件ElasticSearch](https://ujava.cn/assembly/elasticsearch.html)\n" +
          "    \n" +
          "- [组件ERP](https://ujava.cn/assembly/erp.html)\n" +
          "    \n" +
          "- [组件Eureka](https://ujava.cn/assembly/eureka.html)\n" +
          "    \n" +
          "- [组件Flink](https://ujava.cn/assembly/flink.html)\n" +
          "    \n" +
          "- [组件Flume](https://ujava.cn/assembly/flume.html)\n" +
          "    \n" +
          "- [组件Hadoop](https://ujava.cn/assembly/hadoop.html)\n" +
          "    \n" +
          "- [组件Hbase](https://ujava.cn/assembly/hbase.html)\n" +
          "    \n" +
          "- [组件Hive](https://ujava.cn/assembly/hive.html)\n" +
          "    \n" +
          "- [组件Hystrix](https://ujava.cn/assembly/hystrix.html)\n" +
          "    \n" +
          "- [组件Jenkins](https://ujava.cn/assembly/jenkins.html)\n" +
          "    \n" +
          "- [组件Kubernetes](https://ujava.cn/assembly/k8s.html)\n" +
          "    \n" +
          "- [组件MatLab](https://ujava.cn/assembly/matlab.html)\n" +
          "    \n" +
          "- [组件Mock](https://ujava.cn/assembly/mock.html)\n" +
          "    \n" +
          "- [组件MongoDB](https://ujava.cn/assembly/mongodb.html)\n" +
          "    \n" +
          "- [组件MQ](https://ujava.cn/assembly/mq.html)\n" +
          "    \n" +
          "- [组件MyBatis](https://ujava.cn/assembly/mybatis.html)\n" +
          "    \n" +
          "- [组件MySQL](https://ujava.cn/assembly/mysql.html)\n" +
          "    \n" +
          "- [组件Netty](https://ujava.cn/assembly/netty.html)\n" +
          "    \n" +
          "- [组件Nocas](https://ujava.cn/assembly/nocas.html)\n" +
          "    \n" +
          "- [组件Reactor](https://ujava.cn/assembly/reactor.html)\n" +
          "    \n" +
          "- [组件Redis](https://ujava.cn/assembly/redis.html)\n" +
          "    \n" +
          "- [组件Serverless](https://ujava.cn/assembly/serverless.html)\n" +
          "    \n" +
          "- [组件Spark](https://ujava.cn/assembly/spark.html)\n" +
          "    \n" +
          "- [组件Spring](https://ujava.cn/assembly/spring.html)\n" +
          "    \n" +
          "- [组件SpringCloud](https://ujava.cn/assembly/springcloud.html)\n" +
          "    \n" +
          "- [组件Web](https://ujava.cn/assembly/container.html)\n" +
          "    \n" +
          "- [组件WebFlux](https://ujava.cn/assembly/webflux.html)\n" +
          "    \n" +
          "- [组件ZooKeeper](https://ujava.cn/assembly/zookeeper.html)",

    },
    {
      "title_id": 7,
      "detail": "- [算法分类](https://ujava.cn/algorithm/common.html)\n" +
          "    \n" +
          "- [算法试题](https://ujava.cn/algorithm/program.html)",

    },
    {
      "title_id": 8,
      "detail": "- [Future和CompletableFuture的区别](https://ujava.cn/java/future.html)\n" +
          "    \n" +
          "- [Java Arrays类](https://ujava.cn/java/arrays.html)\n" +
          "    \n" +
          "- [Java CollectionUtils类](https://ujava.cn/java/collectionutils.html)\n" +
          "    \n" +
          "- [Java ReentrantLock](https://ujava.cn/java/reentrantlock.html)\n" +
          "    \n" +
          "- [Java UML类图](https://ujava.cn/java/uml.html)\n" +
          "    \n" +
          "- [Java的四个核心思想](https://ujava.cn/java/jdkdesign.html)\n" +
          "    \n" +
          "- [Java核心包](https://ujava.cn/java/why-there-only-value-passing-in-java.html)\n" +
          "    \n" +
          "- [Java锁机制](https://ujava.cn/java/atomic.html)\n" +
          "    \n" +
          "- [Java虚拟线程](https://ujava.cn/java/package.html)\n" +
          "    \n" +
          "- [Java原子类](https://ujava.cn/java/basecore.html)\n" +
          "    \n" +
          "- [Java值传递](https://ujava.cn/java/virtualthread.html)\n" +
          "    \n" +
          "- [Java中设计模式](https://ujava.cn/java/lock.html)\n" +
          "    ",

    },
    {
      "title_id": 9,
      "detail": "- [4种MySQL同步ES方案](https://ujava.cn/synthesis/synchronousdata.html)\n" +
          "    \n" +
          "- [大数据](https://ujava.cn/synthesis/interceptorfilter.html)\n" +
          "    \n" +
          "- [服务器高并发之提高TCP连接数](https://ujava.cn/synthesis/mysqlslow.html)\n" +
          "    \n" +
          "- [概要设计和详细设计](https://ujava.cn/synthesis/mysqllocksql.html)\n" +
          "    \n" +
          "- [高并发场景下如何优化微服务的性能](https://ujava.cn/synthesis/business.html)\n" +
          "    \n" +
          "- [广域网](https://ujava.cn/synthesis/hash.html)\n" +
          "    \n" +
          "- [企业级架构带来的模式改变](https://ujava.cn/synthesis/togaf.html)\n" +
          "    \n" +
          "- [企业级架构建模之浅谈三大模型关系](https://ujava.cn/synthesis/modelchange.html)\n" +
          "    \n" +
          "- [企业架构TOGAF内容框架](https://ujava.cn/synthesis/modelrelation.html)\n" +
          "    \n" +
          "- [设计缓存](https://ujava.cn/synthesis/bigdata.html)\n" +
          "    \n" +
          "- [设计考量](https://ujava.cn/synthesis/wan.html)\n" +
          "    \n" +
          "- [设计容错](https://ujava.cn/synthesis/effect.html)\n" +
          "    \n" +
          "- [设计时可使用的工具](https://ujava.cn/synthesis/split.html)\n" +
          "    \n" +
          "- [设计实践经验](https://ujava.cn/synthesis/microservice.html)\n" +
          "    \n" +
          "- [设计数据库索引](https://ujava.cn/synthesis/tacticalstrategicmanagement.html)\n" +
          "    \n" +
          "- [设计限流](https://ujava.cn/synthesis/digitaltwin.html)\n" +
          "    \n" +
          "- [数字孪生](https://ujava.cn/synthesis/smartwater.html)\n" +
          "    \n" +
          "- [微服务拆分原则](https://ujava.cn/synthesis/tcpcount.html)\n" +
          "    \n" +
          "- [微服务架构和分布式架构的区别](https://ujava.cn/synthesis/summary.html)\n" +
          "    \n" +
          "- [系统设计原则](https://ujava.cn/synthesis/overall.html)\n" +
          "    \n" +
          "- [系统总体结构设计](https://ujava.cn/synthesis/design.html)\n" +
          "    \n" +
          "- [线性规划](https://ujava.cn/synthesis/linear.html)\n" +
          "    \n" +
          "- [一文搞懂业务架构、技术架构、数据架构、运维架构、物理架构理清不同视角的架构](https://ujava.cn/synthesis/experience.html)\n" +
          "    \n" +
          "- [一致性Hash算法](https://ujava.cn/synthesis/faulttolerant.html)\n" +
          "    \n" +
          "- [影响项目的要素及经验总结](https://ujava.cn/synthesis/databaseindex.html)\n" +
          "    \n" +
          "- [运筹学](https://ujava.cn/synthesis/tool.html)\n" +
          "    \n" +
          "- [战术管理和战略管理](https://ujava.cn/synthesis/cache.html)\n" +
          "    \n" +
          "- [智慧水利](https://ujava.cn/synthesis/consider.html)\n" +
          "    \n" +
          "- [Interceptor、Filter、AOP区别](https://ujava.cn/synthesis/throttling.html)\n" +
          "    \n" +
          "- [MySQL慢查询](https://ujava.cn/synthesis/operational.html)\n" +
          "    \n" +
          "- [MySQL死锁SQL](https://ujava.cn/synthesis/performance.html)\n" +
          "    \n",

    },
    {
      "title_id": 10,
      "detail": "-  [项目管理经验1](https://ujava.cn/manage/project1.html)\n" +
          "    \n" +
          "-  [项目管理经验2](https://ujava.cn/manage/project2.html)\n" +
          "    \n" +
          "-  [项目管理经验3](https://ujava.cn/manage/project3.html)\n" +
          "    \n" +
          "-  [项目管理经验4](https://ujava.cn/manage/project4.html)\n" +
          "    \n" +
          "-  [项目管理经验5](https://ujava.cn/manage/project5.html)\n" +
          "    \n" +
          "-  [项目管理经验6](https://ujava.cn/manage/project6.html)\n" +
          "    \n" +
          "-  [项目管理经验7](https://ujava.cn/manage/project7.html)\n" +
          "    \n" +
          "-  [项目管理经验8](https://ujava.cn/manage/project8.html)\n" +
          "    \n" +
          "-  [项目管理经验9](https://ujava.cn/manage/project9.html)\n" +
          "    \n" +
          "-  [项目管理经验10](https://ujava.cn/manage/project10.html)",

    },
  ]

}

module.exports.detail = detail;
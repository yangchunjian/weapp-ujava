
module.exports = {

}

var burger= {
    "data": [
        {

            "burger_id": 1,
            "burger_author_name": "UJava",
            "burger_author_img": "../../images/favicon.jpg",
            "burger_content": "## [必读章节](https://ujava.cn/required/#%E5%BF%85%E8%AF%BB%E7%AB%A0%E8%8A%82)\n" +
                "\n" +
                "- [项目介绍](https://ujava.cn/home.html)\n" +
                "    \n" +
                "- [更新记录](https://ujava.cn/project/changelog.html)\n" +
                "    \n" +
                "- [常见问题](https://ujava.cn/required/faq.html)\n" +
                "    \n" +
                "- [网站历史](https://ujava.cn/required/history.html)",

        },
        {

            "burger_id": 2,
            "burger_author_name": "UJava",
            "burger_author_img": "../../images/favicon.jpg",
            "burger_content": "## [第一梯队思想](./first)\n" +
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

            "burger_id": 3,
            "burger_author_name": "UJava",
            "burger_author_img": "../../images/favicon.jpg",
            "burger_content": "## [设计模式的六大原则](#设计模式的六大原则)\n" +
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
                "- 11、策略模式（Strategy Pattern）\n" +
                "\n" +
                "## [](#四、其他模式)[四、其他模式](./other)\n" +
                "\n" +
                "[其他常用的设计模式](./other)，种类繁多，可以细细研究~\n" +
                "\n",

        },
        {

            "burger_id": 4,
            "burger_author_name": "UJava",
            "burger_author_img": "../../images/favicon.jpg",
            "burger_content": "## [📚简介](#📚简介)\n" +
                "\n" +
                "`UJava`是一个功能丰富且易用的**Java架构设计**经验总结，旨在帮助开发者快速、便捷地使用各类设计完成开发任务，以满足各类业务需求。\n" +
                "\n" +
                "### [🎁UJava名称的由来](#🎁ujava名称的由来)\n" +
                "\n" +
                "UJava = U + Java，是基于设计经验的开源库，“U”是You的表示，Java表示语言。UJava谐音“你的语言”，简洁易懂。\n" +
                "\n" +
                "### [🍺UJava理念](#🍺ujava理念)\n" +
                "\n" +
                "`UJava`既是一个工具集，也是一个知识库，我们从不自诩代码原创，大多数工具类都是**搬运**而来，因此：\n" +
                "\n" +
                "- 你可以引入使用，也可以**拷贝**和修改使用，而**不必标注任何信息**，只是希望能把bug及时反馈回来。\n" +
                "- 我们努力健全**中文**注释，为源码学习者提供良好地学习环境，争取做到人人都能看得懂。\n" +
                "\n" +
                "---\n" +
                "\n" +
                "## [🛠️包含组件](#🛠️包含组件)\n" +
                "\n" +
                "提供以下组件：\n" +
                "\n" +
                "|模块|介绍|\n" +
                "|---|---|\n" +
                "|ujava-common|通用组件|\n" +
                "|ujava-design|设计模式|\n" +
                "|ujava-script|脚本|\n" +
                "|ujava-web|WEB组件|\n" +
                "\n" +
                "可以根据需求对每个模块单独引入，也可以通过引入`ujava-all`方式引入所有模块。\n" +
                "\n" +
                "---\n" +
                "\n" +
                "## [📝文档](#📝文档)\n" +
                "\n" +
                "[📘中文文档open in new window](https://www.ujava.cn/)\n" +
                "\n" +
                "[📙参考APIopen in new window](https://apidoc.gitee.com/yangchunjian/ujava/)\n" +
                "\n" +
                "---\n" +
                "\n" +
                "## [🪙支持UJava](#🪙支持ujava)\n" +
                "\n" +
                "### [💳捐赠](#💳捐赠)\n" +
                "\n" +
                "如果你觉得UJava不错，可以捐赠请维护者吃包辣条~，在此表示感谢_。\n" +
                "\n" +
                "[Gitee上捐赠open in new window](https://gitee.com/yangchunjian/ujava)\n" +
                "\n" +
                "---\n" +
                "\n" +
                "## [📦安装](#📦安装)\n" +
                "\n" +
                "### [🍊Maven](#🍊maven)\n" +
                "\n" +
                "在项目的pom.xml的dependencies中加入以下内容:\n" +
                "\n" +
                "```\n" +
                "<dependency>\n" +
                "    <groupId>cn.ujava</groupId>\n" +
                "    <artifactId>ujava-all</artifactId>\n" +
                "    <version>7.0.0</version>\n" +
                "</dependency>\n" +
                "```\n" +
                "\n" +
                "### [🍐Gradle](#🍐gradle)\n" +
                "\n" +
                "```\n" +
                "implementation 'cn.ujava:ujava-all:7.0.0'\n" +
                "```\n" +
                "\n" +
                "### [📥下载jar](#📥下载jar)\n" +
                "\n" +
                "点击以下链接，下载`ujava-all-X.X.X.jar`即可：\n" +
                "\n" +
                "- [Maven中央库open in new window](https://repo1.maven.org/maven2/cn/ujava/ujava-all/7.0.0/)\n" +
                "\n" +
                "> 🔔️注意  \n" +
                "> UJava 3.x支持JDK8+。\n" +
                "\n" +
                "### [🚽编译安装](#🚽编译安装)\n" +
                "\n" +
                "访问UJava的Gitee主页：[https://gitee.com/yangchunjian/ujavaopen in new window](https://gitee.com/yangchunjian/ujava) 下载整个项目源码（v7-main或v7-dev分支都可）然后进入UJava项目目录执行：\n" +
                "\n" +
                "```\n" +
                "./ujava.sh --install\n" +
                "```\n" +
                "\n" +
                "然后就可以使用Maven引入了。\n" +
                "\n" +
                "---\n" +
                "\n" +
                "## [🏗️添砖加瓦](#🏗️添砖加瓦)\n" +
                "\n" +
                "### [🎋分支说明](#🎋分支说明)\n" +
                "\n" +
                "UJava的源码分为两个分支，功能如下：\n" +
                "\n" +
                "|分支|作用|\n" +
                "|---|---|\n" +
                "|v7-main|主分支，release版本使用的分支，与中央库提交的jar一致，不接收任何pr或修改|\n" +
                "|v7-dev|开发分支，默认为下个版本的SNAPSHOT版本，接受修改或pr|\n" +
                "\n" +
                "### [🐞提供bug反馈或建议](#🐞提供bug反馈或建议)\n" +
                "\n" +
                "提交问题反馈请说明正在使用的JDK版本呢、UJava版本和相关依赖库版本。\n" +
                "\n" +
                "- [Gitee issueopen in new window](https://gitee.com/yangchunjian/ujava/issues)\n" +
                "- [Github issueopen in new window](https://github.com/yangchunjian/ujava/issues)\n" +
                "\n" +
                "### [🧬贡献代码的步骤](#🧬贡献代码的步骤)\n" +
                "\n" +
                "1. 在Gitee或者Github上fork项目到自己的repo\n" +
                "2. 把fork过去的项目也就是你的项目clone到你的本地\n" +
                "3. 修改代码（记得一定要修改v7-dev分支）\n" +
                "4. commit后push到自己的库（v7-dev分支）\n" +
                "5. 登录Gitee或Github在你首页可以看到一个 pull request 按钮，点击它，填写一些说明信息，然后提交即可。\n" +
                "6. 等待维护者合并\n" +
                "\n" +
                "### [📐PR遵照的原则](#📐pr遵照的原则)\n" +
                "\n" +
                "UJava欢迎任何人为UJava添砖加瓦，贡献代码，不过维护者是一个强迫症患者，为了照顾病人，需要提交的pr（pull request）符合一些规范，规范如下：\n" +
                "\n" +
                "1. 注释完备，尤其每个新增的方法应按照Java文档规范标明方法说明、参数说明、返回值说明等信息，必要时请添加单元测试，如果愿意，也可以加上你的大名。\n" +
                "2. 新加的方法不要使用第三方库的方法，UJava遵循无依赖原则（除非在extra模块中加方法工具）。\n" +
                "3. 请pull request到`v7-dev`分支。UJava在7.x版本后使用了新的分支：`v7-main`是主分支，表示已经发布中央库的版本，这个分支不允许pr，也不允许修改。\n" +
                "4. 我们如果关闭了你的issue或pr，请不要诧异，这是我们保持问题处理整洁的一种方式，你依旧可以继续讨论，当有讨论结果时我们会重新打开。\n" +
                "\n",

        },
        
    ]

}

module.exports.burger = burger;
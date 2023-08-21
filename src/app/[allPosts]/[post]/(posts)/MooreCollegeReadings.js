import React from 'react'

  const readingsJSON = [
    {
      "Year": 1,
      "Subject": "Biblical Interpretation and Application",
      "Authors": "Cameron",
      "Title": "Joined-Up Life: A Christian Account of How Ethics Work",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Interpretation and Application",
      "Authors": "Sach & Alldritt",
      "Title": "Dig Even Deeper",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Beale",
      "Title": "A New Testament Theology: the Unfolding of the Old Testament in the New",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Bolt",
      "Title": "Miracles in Scripture (within New Dictionary of Christian Apologetics)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Campbell-Jack",
      "Title": "New Dictionary of Christian Apologetics",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Gibson",
      "Title": "Worship: On Earth As It Is in Heaven (within Reformation worship: Liturgies from the Past for the Present)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Goldsworthy",
      "Title": "Gospel and Kingdom",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Goldsworthy",
      "Title": "According To Plan",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Goldsworthy",
      "Title": "Christ-Centred Biblical Theology: Hermeneutical Foundations and Principles",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Goldsworthy",
      "Title": "The Son of God and the New Creation",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Robertson",
      "Title": "The Christ of the Covenants",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Schreiner",
      "Title": "Goodbye and Hello: the Sabbath Command For New Covenant Believers (within Progressive Covenantalism)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Vos",
      "Title": "Biblical Theology: Old and New Testaments",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Biblical Theology",
      "Authors": "Webb",
      "Title": "Homosexuality in Scripture (within Explorations 8)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Church History",
      "Authors": "Davidson",
      "Title": "A Public Faith: From Constantine To the Medieval World Ad 312-600",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Church History",
      "Authors": "Davidson",
      "Title": "The Birth of the Church: From Jesus To Constantine Ad 30-312",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Church History",
      "Authors": "Noll",
      "Title": "Turning Points: Decisive Moments in the History of Christianity",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Cross-Cultural Christian Communication",
      "Authors": "Hiebert",
      "Title": "Anthropological Insights For Missionaries",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Berkhof",
      "Title": "Providence",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Bray",
      "Title": "God Is Love",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Cole",
      "Title": "Faithful Theology: An Introduction",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Frame",
      "Title": "Systematic Theology: An Introduction To Christian Belief",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Gunton",
      "Title": "The Christian Faith: An Introduction To Christian Doctrine (in Systematic theology: an introduction to Christian belief)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Horton",
      "Title": "Pilgrim Theology",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Doctrine",
      "Authors": "Webster",
      "Title": "Providence",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Introduction to Pastoral Ministry",
      "Authors": "Guthrie",
      "Title": "What Grieving People Wish You Knew About What Really Helps",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Introduction to Pastoral Ministry",
      "Authors": "Kapic",
      "Title": "Embodied Hope",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Introduction to Pastoral Ministry",
      "Authors": "MacKinlay",
      "Title": "The Spiritual Dimension of Ageing",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Leadership in Various Ministry Contexts",
      "Authors": "Bolt",
      "Title": "Mission Minded",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Leadership in Various Ministry Contexts",
      "Authors": "Hamilton",
      "Title": "Wisdom in Leadership: the How and Why of Leading the People You Serve",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Leadership in Various Ministry Contexts",
      "Authors": "Lencioni",
      "Title": "The Five Dysfunctions of A Team",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Leadership in Various Ministry Contexts",
      "Authors": "Quinn",
      "Title": "Deep Change",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Ministry and Mission",
      "Authors": "Helm",
      "Title": "Expositional Preaching ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Ministry and Mission",
      "Authors": "Lane & Tripp",
      "Title": "How People Change",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Ministry and Mission",
      "Authors": "Marshall & Payne",
      "Title": "The Trellis and the Vine",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Music Ministry Leadership",
      "Authors": "Kauflin",
      "Title": "Worship Matters ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Music Ministry Leadership",
      "Authors": "Peterson",
      "Title": "Encountering God Together ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Music Ministry Leadership",
      "Authors": "Strange",
      "Title": "Plugged in ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Bock",
      "Title": "Ephesians (Tyndale NT Commentary) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Bolt",
      "Title": "The Cross From A Distance ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Carson & Moo",
      "Title": "An Introduction To the New Testament ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Edwards",
      "Title": "The Gospel According To Mark (Pillar NT Commentary) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Ferguson",
      "Title": "Backgrounds of Early Christianity",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Lane",
      "Title": "The Gospel According To Mark (New International Commentary on the NT) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Schnabel",
      "Title": "Mark (Tyndale NT Commentary)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "New Testament",
      "Authors": "Stott",
      "Title": "The Message of Ephesians: God's New Society ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Bruce",
      "Title": "The Books and the Parchments",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Childs",
      "Title": "The Book of Exodus (Old Testament Library)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Coogan",
      "Title": "A Reader of Ancient Near Eastern Texts",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Estes & Mangum",
      "Title": "Literary Approaches To the Bible",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Hill & Walton",
      "Title": "A Survey of the Old Testament, 3Rd Ed.",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Hoffmeier",
      "Title": "The Archaeology of the Bible",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Hughes",
      "Title": "Compositional History Source, Form and Redaction Criticism",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "LaSor, Hubbard & Bush",
      "Title": "Old Testament Survey: the Message, Form, and Background of the Old Testament",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Long",
      "Title": "Old Testament History: A Hermeneutical Perspective",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Pritchard",
      "Title": "Ancient Near Eastern Texts Relating To the Old Testament",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Provan",
      "Title": "A Biblical History of Israel",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Satterthwaite",
      "Title": "Narrative Criticism: the Theological Implication of Narrative Techniques",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Shead",
      "Title": "Reading the Genesis Creation Account",
      "Journal": "CASE Quarterly #57",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Waltke",
      "Title": "Textual Criticism of the Old Testament and Its Relation To Exegesis and Theology",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Waltke",
      "Title": "Genesis: A Commentary",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Walton",
      "Title": "Genesis (NIV Application Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Old Testament",
      "Authors": "Wenham",
      "Title": "Genesis 1-15 (Word Biblical Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 1,
      "Subject": "Summer Work",
      "Authors": "Calvin",
      "Title": "Institutes of the Christian Religion",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 1,
      "Subject": "Understanding Buddhism and Islam",
      "Authors": "Various Editions",
      "Title": "The Qur'an (Koran)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "Calvin",
      "Title": "Short Treatise On the Lord's Supper",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "Cranmer",
      "Title": "Miscellaneous Writings and Letters of Thomas Cranmer",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "Heinze",
      "Title": "Reform and Conflict From the Medieval World To the Wars of Religion 1350-1648",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "Luther",
      "Title": "The Babylonian Captivity of the Church",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "MacCulloch",
      "Title": "Putting the English Reformation On the Map",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "MacCulloch",
      "Title": "Reformation: Europe's House Divided",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Church History",
      "Authors": "Zwingli",
      "Title": "The Shepherd",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Doctrine",
      "Authors": "Letham",
      "Title": "The Holy Trinity: in Scripture, History, Theology and Worship",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Doctrine",
      "Authors": "Levering",
      "Title": "Engaging the Doctrine of Creation: Cosmos, Creatures, and the Wise and Good Creator",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Doctrine",
      "Authors": "McNall",
      "Title": "The Mosaic of Atonement: An Integrated Approach",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Doctrine",
      "Authors": "Sanders",
      "Title": "The Triune God",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Doctrine",
      "Authors": "Ward",
      "Title": "Words of Life",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Greek",
      "Authors": "Runge",
      "Title": "Discourse Grammar of the Greek New Testament",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Greek",
      "Authors": "Wallace",
      "Title": "Greek Grammar Beyond the Basics: An Exegetical Syntax of the New Testament",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Hebrew",
      "Authors": "Chisholm",
      "Title": "From Exegesis To Exposition: A Practical Guide To Using Biblical Hebrew",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Hebrew",
      "Authors": "Ross",
      "Title": "Introducing Biblical Hebrew",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Bennett",
      "Title": "Using the Bible in Practical Theology",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Carson",
      "Title": "The Pastor As Scholar and the Scholar As Pastor",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Fairhurst",
      "Title": "The Power of Framing",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Floding",
      "Title": "Welcome To Theological Field Education",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Hawkins & Shoet",
      "Title": "Supervision in the Helping Professions",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Miller-McLemore",
      "Title": "Wiley Blackwell Companion To Practical Theology",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Sims",
      "Title": "Theologically Reflective Practice: A Key Tool For Contemporary Ministry",
      "Journal": "Reflective Practice: Formation and Supervision in Ministry",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Adams",
      "Title": "Roots of Contemporary Evangelical Spirituality",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Barth",
      "Title": "Prayer",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Brown",
      "Title": "Growing Yourself Up: How To Bring Your Best To All of Life's Relationships, 2nd Edition",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Burns, Chapman & Guthrie",
      "Title": "Resilient Ministry: What Pastors Told Us About Surviving and Thriving",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Cupples",
      "Title": "Maintaining An Integrated Devotional Life (in Keeping Your Balance: Approaching Theological and Religious Studies by Duce and Strange)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Edwards",
      "Title": "The Religious Affections, Part 1",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "McGrath",
      "Title": "Christian Spirituality: An Introduction",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Packer",
      "Title": "An Introduction To Systematic Spirituality",
      "Journal": "Crux 26 (1990)",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Quicke",
      "Title": "Strength in Weakness: Developing This Paradox Through Preaching and Leading (in On Eagles Wings: An Exploration of Strength in the Middle of Weakness, ed. by Cohen and Parsons)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Sande",
      "Title": "The Peacemaker: A Biblical Guide To Resolving Personal Conflict",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Steinke",
      "Title": "How Your Church Family Works: Understanding Congregations As Emotional Systems",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Tripp",
      "Title": "Dangerous Calling",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Ministry and Mission",
      "Authors": "Volf",
      "Title": "Exclusion and Embrace: A Theological Exploration of Identity, Otherness, and Reconciliation",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Bauckham",
      "Title": "Cross, Resurrection and Exaltation",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Bock",
      "Title": "Studying the Historical Jesus",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Carson",
      "Title": "The Gospel According To John (Pillar NT Commentary) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Frey",
      "Title": "The Death of Jesus in the Gospel of John",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Garland",
      "Title": "1 Corinthians (Baker Exegetical Commentary on the NT) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Kern",
      "Title": "The Word of the Cross: the Language of the Cross in 1 Corinthians",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Moloney",
      "Title": "The Gospel of John As Scripture",
      "Journal": "Catholic Biblical Quarterly, 67 (2005)",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Ridderbos",
      "Title": "The Gospel According To John: A Theological Commentary",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Rosner & Ciampa",
      "Title": "1 Corinthians",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Rosner & Ciampa",
      "Title": "The Structure and Argument of 1 Corinthians: A Biblical/Jewish Approach",
      "Journal": "New Testament Studies, 52:2 (2006)",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Wenkel",
      "Title": "Kingship and Thrones For All Christians",
      "Journal": "Expository Times 128 (2016)",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Wilson",
      "Title": "The Strongest Argument For Universalism in 1 Corinthians",
      "Journal": "Journal For the Evangelical Theological Society, 59:4 (2016)",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "New Testament",
      "Authors": "Witherington",
      "Title": "Conflict and Community in Corinth",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Old Testament",
      "Authors": "Alter",
      "Title": "The Art of Biblical Narrative ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Old Testament",
      "Authors": "Firth & Johnston",
      "Title": "Interpreting Deuteronomy",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Old Testament",
      "Authors": "Gilmour",
      "Title": "Representing the Past: A Literary Analysis of Narrative Historiography in the Book of Samuel",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Old Testament",
      "Authors": "Joyce",
      "Title": "Ezekiel: A Commentary",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 2,
      "Subject": "Philosophy",
      "Authors": "Jacobs",
      "Title": "How To Think",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Philosophy",
      "Authors": "MacIntyre",
      "Title": "Whose Justice? Which Rationality?",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 2,
      "Subject": "Philosophy",
      "Authors": "Olthius",
      "Title": "On Worldviews",
      "Journal": "Christian Scholar's Review 14:2, 1985",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Best",
      "Title": "Fearfully and Wonderfully Made: Ethics and the Beginnings of Human Life",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Grabill",
      "Title": "Rediscovering the Natural Law in Reformed Theological Ethics",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Hauerwas",
      "Title": "Sex in Public: How Adventurous Christians Are Doing It (within The Hauerwas Reader)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Hauerwas",
      "Title": "The Hauerwas Reader",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "MacIntyre",
      "Title": "After Virtue",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Meilaender",
      "Title": "Sexuality (within New Dictionary of Christian Ethics and Pastoral Theology)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "O'Donovan",
      "Title": "Entering Into Rest (Ethics As Theology 3)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "O'Donovan",
      "Title": "Resurrection and Moral Order: An Outline For Evangelical Ethics",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "O'Donovan",
      "Title": "Self, World, and Time (Ethics As Theology 1)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "VanDrunen",
      "Title": "Bioethics and the Christian Life",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "VanDrunen",
      "Title": "Living in God's Two Kingdoms",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "VanDrunen",
      "Title": "Natural Law and the Two Kingdoms: A Study in the Development of Reformed Social Thought",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Verhey",
      "Title": "New Testament Ethics (within New Dictionary of Christian Ethics and Pastoral Theology)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Webster",
      "Title": "God Without Measure, Vol.1: God and the Works of God (Chapter 6)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Webster",
      "Title": "God Without Measure, Vol.2: Virtue and Intellect (Chapter 3)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Christian Ethics",
      "Authors": "Wright",
      "Title": "Old Testament Ethics (within New Dictionary of Christian Ethics and Pastoral Theology)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Doctrine",
      "Authors": "Allen",
      "Title": "Justification and the Gospel",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Doctrine",
      "Authors": "Billings",
      "Title": "Sacraments",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Doctrine",
      "Authors": "Ferguson",
      "Title": "The Whole Christ: Legalism, Antinomianism, and Gospel Assurance",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Doctrine",
      "Authors": "Murray",
      "Title": "Adoption",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Doctrine",
      "Authors": "Webster",
      "Title": "Communion With Christ: Mortification and Vivification",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Hebrew",
      "Authors": "Brotzman",
      "Title": "Old Testament Textual Criticism: A Practical Introduction",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Hebrew",
      "Authors": "Cotterell",
      "Title": "Linguistics, Meaning, Semantics and Discourse Analysis",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Hebrew",
      "Authors": "Eco",
      "Title": "Mouse Or Rat? Translation As Negotiation.",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Hebrew",
      "Authors": "Watson",
      "Title": "Hebrew Poetry",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Intentional Ministry Reflection",
      "Authors": "Osmer",
      "Title": "Practical Theology: An Introduction",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Ministry and Mission",
      "Authors": "Harrison",
      "Title": "A Better Story: God, Sex and Human Flourishing",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Ministry and Mission",
      "Authors": "Marshall & Payne",
      "Title": "The Vine Project: Shaping Your Ministry Around Disciple Making ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Barclay",
      "Title": "Believers and the Last Judgment in Paul",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Barclay",
      "Title": "Faith and Self-Detachment From Cultural Norms: A Study in Romans 14-15",
      "Journal": "Zeitschrift für die Neutestamentliche Wissenschaft 104.2 (2013)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Barclay",
      "Title": "Paul, the Gift and the Battle Over Gentile Circumcision: Revisiting the Logic of Galatians",
      "Journal": "Australian Biblical Review, 58 (2010)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Belleville",
      "Title": "Teaching and Usurping Authority: 1 Timothy 2:11-15",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Dunson",
      "Title": "The Individual and Community in Twentieth and Twenty-First Century Pauline Scholarship",
      "Journal": "Currents in Biblical Research, 9:1 (2010)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Moo",
      "Title": "The Letter To the Romans (New International Commentary on the NT)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Rabens",
      "Title": "Indicative and Imperative As the Substructure of Paul's Theology-And-Ethics in Galatians?",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Schreiner",
      "Title": "An Interpretation of 1 Timothy 2:9-15 : A Dialogue With Scholarship",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Timmins",
      "Title": "Why Paul Wrote Romans: Putting the Prieces Together",
      "Journal": "Themelios 43.3, 2018",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Wegner",
      "Title": "A Student's Guide To Textual Criticism of the Bible ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Windsor",
      "Title": "The Named Jew and the Name of God: the Argument of Romans 2:17-29 in Light of Roman Attitudes To Jewish Teachers",
      "Journal": "Novum Testamentum, 63.2, 2021",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "New Testament",
      "Authors": "Wright",
      "Title": "Justification: Yesterday, Today and Forever",
      "Journal": "Journal of the Evangelical Theological Society, 54:1 (2011)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Baker",
      "Title": "Isaiah (Zondervan Illustrated Bible Backgrounds Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Brown",
      "Title": "Psalms (within Interpreting Biblical Texts)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Broyles",
      "Title": "Writing and Reading the Scroll of Isaiah (Volume 1)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "De Andradi",
      "Title": "The Akedah Servant Complex",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Dempster",
      "Title": "Canons On the Right and Canons On the Left: Finding A Resolution in the Canon Debate",
      "Journal": "Journal of the Evangelical Theological Society 52 (2009)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Hunter",
      "Title": "Isaiah: A 12-Week Study",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Lafferty",
      "Title": "Prophetic Critique of the Priority of the Cult",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Lessing",
      "Title": "Isaiah 40-55 (Concordia Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Paul",
      "Title": "Isaiah 40-66: Translation and Commentary (Eerdmans Critical Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Seitz",
      "Title": "The Goodly Fellowship of the Prophets: the Achievement of Association in Canon Formation",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Old Testament",
      "Authors": "Wilson",
      "Title": "Job (Two Horizons O.T. Commentary)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Abend",
      "Title": "What the Science of Morality Doesn't Say About Morality",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Azadegan",
      "Title": "Antitheism and Gratuitous Evil",
      "Journal": "Heythrop Journal 60 (2019)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Blocher",
      "Title": "Evil and the Cross",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Christensen",
      "Title": "What About Evil? (Chapters 1 and 2)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Clark",
      "Title": "Dialogical Apologetics: A Person-Centered Approach To Christian Defense (Chapter 3)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Frame",
      "Title": "Losing My Religion: Unbelief in Australia",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Ganssle",
      "Title": "Our Deepest Desires: How the Christian Story Fulfills Human Aspirations",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Gregersen",
      "Title": "Trial and Temptation: An Essay in the Multiple Logics of Faith",
      "Journal": "Theology Today, 57:3 (2000)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Harris",
      "Title": "The Moral Landscape",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Huebner",
      "Title": "Critiquing Empirical Moral Psychology",
      "Journal": "Philosophy of the Social Sciences, 41:1 (2011)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "McCullough",
      "Title": "Christ, the Karamazovs, and Compensational Theodices",
      "Journal": "Modern Theology 34.2. 2018",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Murray",
      "Title": "The Madness of Crowds: Gender, Race and Identity",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Pinker",
      "Title": "How the Mind Works",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Pluckrose & Lindsay",
      "Title": "Cynical Theories: How Activist Scholarship Made Everything About Race, Gender and Identity - and Why This Harms Everybody",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Russell",
      "Title": "Acts of God: Thinking Theologically About Natural Disasters and Other Evils",
      "Journal": "CASE Quarterly 27 (2011)",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Sheldrake",
      "Title": "The Science Delusion: Freeing the Spirit of Enquiry (Chapter 1)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Trueman",
      "Title": "The Rise and Triumph of the Modern Self: Cultural Amnesia, Expressive Individualism, and the Road To Sexual Revolution",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Vorster",
      "Title": "The Augustinian Type of Theodicy: Is It Outdated?",
      "Journal": "Journal of Reformed Theology, V5, 2011",
      "fullBook": "n"
    },
    {
      "Year": 3,
      "Subject": "Philosophy",
      "Authors": "Wilkens & Sanford",
      "Title": "Hidden Worldviews: Eight Cultural Stories That Shape Our Lives",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Advanced Pastoral Ministry",
      "Authors": "Ash",
      "Title": "Out of the Storm",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Advanced Topics in Biblical Greek and Exegesis",
      "Authors": "Campbell",
      "Title": "Advances in the Study of Greek: New Insights For Reading the New Testament",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Advanced Topics in Biblical Greek and Exegesis",
      "Authors": "Porter & Pitts",
      "Title": "New Testament Greek Language and Linguistics in Recent Research",
      "Journal": "Currents in Biblical Research",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Anglican Identity and Liturgy",
      "Authors": "Ferguson",
      "Title": "The Square and the Tower",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Anglican Identity and Liturgy",
      "Authors": "Gibson & Earngey",
      "Title": "Reformation Worship: Liturgies From the Past For the Present",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Anglican Identity and Liturgy",
      "Authors": "Jensen",
      "Title": "Reformation Anglican Worship",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Anglican Identity and Liturgy",
      "Authors": "Peterson",
      "Title": "Encountering God Together",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Anselm",
      "Title": "Why God Became Man (Cur Deus Homo?)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Athanasius",
      "Title": "On the Incarnation",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Beilby & Eddy",
      "Title": "The Nature of the Atonement: Four Views",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Bird",
      "Title": "Incorporated Righteousness: A Response To Recent Evangelical Discussion Concerning the Imputation of Christ's Righteousness in Justification",
      "Journal": "Journal of the Evangelical Theological Society, V.47.2 (2004)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Blocher",
      "Title": "Biblical Metaphors and the Doctrine of Atonement",
      "Journal": "Journal of the Evangelical Theological Society, V.47.4 (2004)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Campbell",
      "Title": "The Nature of the Atonement",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Crisp",
      "Title": "Moral Exemplarism and Atonement",
      "Journal": "Scottish Journal of Theology, 73 (2020)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Dunson",
      "Title": "Do Bible Words Have Bible Meaning?",
      "Journal": "Westminster Theological Journal, v.75.2, 2013",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Green & Baker",
      "Title": "Recovering the Scandal of the Cross: Atonement in New Testament & Contemporary Context",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Gundry",
      "Title": "The Nonimputation of Christ's Righteousness",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Hill",
      "Title": "The Glory of the Atonement: Biblical, Historical and Practical Perspectives",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Holmes",
      "Title": "Can Punishment Bring Peace? Penal Substitution Revisited",
      "Journal": "Scottish Journal of Theology,58.1 (2005)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Hultgren",
      "Title": "Hilasterion (Rom 3:25) and the Union of Divine Justice and Mercy",
      "Journal": "Journal of Theological Studies, 70.2 (2019)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Hurtado",
      "Title": "Jesus' Death As Paradigmatic in the New Testament",
      "Journal": "Scottish Journal of Theology, v57.4 (2004)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Jeffrey, Ovey & Sach",
      "Title": "Pierced For Our Transgressions",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Marshall",
      "Title": "The Theology of the Atonement",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Moltmann",
      "Title": "Crucified God, Chapter 6",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Owen",
      "Title": "The Death of Death in the Death of Christ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Peterson",
      "Title": "Atonement in the Old Testament",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Piper",
      "Title": "Counted Righteous in Christ: Should We Abandon the Imputation of Christ's Righteousness?",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Prothro",
      "Title": "The Strange Case of Aukatôw in the Septuagint and Paul: the Oddity and Origins of Paul’S Talk of “Justification”",
      "Journal": " Zeitschrift fur die neutestament Wissenschaft, 107.1, 2016",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Thompson [et al]",
      "Title": "Penal Substitutionary Atonement",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Weaver",
      "Title": "The Nonviolent Atonement",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Atonement",
      "Authors": "Williams",
      "Title": "Penal Substitutionary Atonement in the Church Fathers",
      "Journal": "Evangelical Quarterly, 83.3 (2011)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Bauckham",
      "Title": "Jesus and the God of Israel",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Bock",
      "Title": "The Son of Man Seated At God's Right Hand and the Debate Over Jesus' 'Blasphemy' (within Jesus of Nazareth, Lord and Christ)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Buckwalter",
      "Title": "The Divine Saviour (within Witness to the Gospels)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Capes",
      "Title": "The Divine Christ: Paul, the Lord Jesus, and the Scriptures of Israel",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Carson",
      "Title": "Matthew (within The Expositor's Bible Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Hurtado",
      "Title": "Lord Jesus Christ: Devotion To Jesus in Earliest Christianity",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Marshall",
      "Title": "The Origins of New Testament Christology",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Christology",
      "Authors": "Witherington",
      "Title": "Christology and the Words of Jesus (within The Christology of Jesus)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Church History",
      "Authors": "Carey",
      "Title": "Believing in Australia: A Cultural History of Religions",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Church History",
      "Authors": "Evans, G",
      "Title": "In Defence of History",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Church History",
      "Authors": "Lang",
      "Title": "The Question of Questions! Or, Is This Colony To Be Transformed Into A Province of the Popedom? A Letter To the Protestant Landholders of New South Wales.",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Church History",
      "Authors": "Piggin",
      "Title": "Evangelical Christianity in Australia: Spirit, Word and World",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Church History",
      "Authors": "Thompson",
      "Title": "Religion in Australia: A History",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Greenspahn",
      "Title": "An Introduction To Aramaic (Corrected, 2nd Edition)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Muraoka",
      "Title": "A Biblical Aramaic Reader With An Outline Grammar",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Newsom",
      "Title": "Daniel: A Commentary (Old Testament Library)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Schuele",
      "Title": "An Introduction To Biblical Aramaic",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Wesselius",
      "Title": "Language and Style in Biblical Aramaic: Observations On the Unity of Daniel 2-7'",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Wesselius",
      "Title": "The Literary Nature of the Book of Daniel and the Linguistic Character of Its Aramaic'",
      "Journal": "Vetus Testamentum 38",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Authors": "Wilson",
      "Title": "The Lives of the Wise in An Anti-God World",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Augustine",
      "Title": "Expositions of the Psalms 1-32",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Calvin",
      "Title": "Commentaries On the Four Last Books of Moses, Arranged in the Form of A Harmony (Volume 1)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Childs",
      "Title": "Biblical Theology of the Old and New Testaments: Theological Reflection On the Christian Bible",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Collett",
      "Title": "Reading Forward: the Old Testament and Retrospective Stance",
      "Journal": "Pro Ecclesia 23.3 (2018)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Collett",
      "Title": "The Christomorphic Shaping of Time in Radner's Time and the Word",
      "Journal": "Pro Ecclesia v. 27.3 (2018)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Collett",
      "Title": "Figural Reading and the Old Testament: Theology and Practice",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Frei",
      "Title": "The Eclipse of Biblical Narrative",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Gentry & Wellum",
      "Title": "Kingdom Through Covenant: A Biblical-Theological Understanding of the Covenants",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Goldsworthy",
      "Title": "Gospel-Centred Hermeneutics",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Muller",
      "Title": "The Significance of Precritical Exegesis: Retrospect and Prospect (in Biblical interpretation in the era of the Reformation, ed. by Muller)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Muller",
      "Title": "Post-Reformation Reformed Dogmatics: the Rise and Development of Reformed Orthodoxy Ca. 1520 To Ca. 1725, Vol.2",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Owen",
      "Title": "The Works of John Owen",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Radner",
      "Title": "Time and the Word: Figural Reading of the Christian Scriptures",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Seitz",
      "Title": "The Character of Christian Scripture: the Significance of A Two-Testament Bible",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Seitz",
      "Title": "The Elder Testament: Canon, Theology, Trinity",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Steinmetz",
      "Title": "The Superiority of Pre-Critical Exegesis",
      "Journal": "Theology Today, v.37 (1980)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Ursinus",
      "Title": "The Commentary of Dr. Zacharias Ursinus On the Heidelberg Catechism, Translated By Willard",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Webster",
      "Title": "Biblical Reasoning",
      "Journal": "Anglican Theological Review, v. 90 (2008)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Hermeneutics",
      "Authors": "Webster",
      "Title": "The Domain of the Word: Scripture and Theological Reason (Chapter 3)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Ministry and Mission",
      "Authors": "Helopoulos",
      "Title": "The New Pastor's Handbook: Help and Encouragement For the First Years of Ministry ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Bauckham",
      "Title": "Monotheism and Christology in Hebrews 1",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Bockmuehl",
      "Title": "The Church in Hebrews",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Cooper",
      "Title": "Adaptive Eschatological Inference From the Gospel of Matthew",
      "Journal": "Journal for the Studies of the New Testament V33/1 2010",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Cooper",
      "Title": "That Cursed Messiah: the Curse-Bearing Death of Jesus in Matthew 26:57 - 27:54",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Deines",
      "Title": "Not the Law But the Messiah: Law and Righteousness in the Gospel of Matthew - An Ongoing Debate",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "DeSilva",
      "Title": "Entering God's Rest: Eschatology and the Socio-Rhetorical Strategy of Hebrews",
      "Journal": "Trinity Journal, 21 (2000)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Donaldson, T",
      "Title": "The Vindicated Son. A Narrative Approach To Matthean Christology",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Dumbrell",
      "Title": "The Logic of the Role of the Law in Matthew 5:1-20",
      "Journal": "Novum Testamentum 23 (1981)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Guthrie",
      "Title": "Hebrews in Its First-Century Contexts: Recent Research",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Hare",
      "Title": "How Jewish Is the Gospel of Matthew?",
      "Journal": "Catholic Biblical Quarterly 62 (2000)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Matera",
      "Title": "The Plot of Matthew's Gospel",
      "Journal": "Catholic Biblical Quarterly 49 (1987)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Mugeridge",
      "Title": "Warnings in the Epistle To the Hebrews",
      "Journal": "Reformed Theological Review 46 (1987)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Peterson",
      "Title": "God and Scripture in Hebrews",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Peterson",
      "Title": "The Incarnation and Christian Living",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Powell",
      "Title": "The Plot and Subplots of Matthew's Gospel",
      "Journal": "New Testament Studies 38 (1992)",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Schreiner",
      "Title": "Commentary On Hebrews: Biblical Theology For Proclamation",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "New Testament",
      "Authors": "Weren",
      "Title": "The Macrostructure of Matthew's Gospel: A New Proposal",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Athas",
      "Title": "The Failure of Davidic Hope?",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Boda",
      "Title": "The Book of Zechariah (New International Commentary on the NT) ",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Meyers",
      "Title": "Haggai, Zechariah 1-8: A New Translation With Intro and Commentary",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Meyers",
      "Title": "Zechariah 9-14 (Anchor Yale Bible Commentary)",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Nogalski",
      "Title": "Zechariah",
      "Journal": "n/a",
      "fullBook": "n"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Petterson",
      "Title": "Behold Your King: the Hope For the House of David in the Book of Zechariah",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Petterson",
      "Title": "Haggai, Zechariah & Malachi (Apollos OT Commentary)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Old Testament",
      "Authors": "Redditt",
      "Title": "Zechariah 9-14 (International Exegetical Commentary On the Old Testament)",
      "Journal": "n/a",
      "fullBook": "y"
    },
    {
      "Year": 4,
      "Subject": "Project",
      "Authors": "Vanhoozer & Treier",
      "Title": "Theology and the Mirror of Scripture",
      "Journal": "n/a",
      "fullBook": "y"
    }
   ]


   const mooreCourses = [
    {
      "Subject": "Biblical Interpretation and Application",
      "Year": 1
    },
    {
      "Subject": "Biblical Theology",
      "Year": 1
    },
    {
      "Subject": "Church History",
      "Year": 1
    },
    {
      "Subject": "Cross-Cultural Christian Communication",
      "Year": 1
    },
    {
      "Subject": "Doctrine",
      "Year": 1
    },
    {
      "Subject": "Introduction to Pastoral Ministry",
      "Year": 1
    },
    {
      "Subject": "Leadership in Various Ministry Contexts",
      "Year": 1
    },
    {
      "Subject": "Ministry and Mission",
      "Year": 1
    },
    {
      "Subject": "Music Ministry Leadership",
      "Year": 1
    },
    {
      "Subject": "New Testament",
      "Year": 1
    },
    {
      "Subject": "Old Testament",
      "Year": 1
    },
    {
      "Subject": "Summer Work",
      "Year": 1
    },
    {
      "Subject": "Understanding Buddhism and Islam",
      "Year": 1
    },
    {
      "Subject": "Church History",
      "Year": 2
    },
    {
      "Subject": "Doctrine",
      "Year": 2
    },
    {
      "Subject": "Greek",
      "Year": 2
    },
    {
      "Subject": "Hebrew",
      "Year": 2
    },
    {
      "Subject": "Intentional Ministry Reflection",
      "Year": 2
    },
    {
      "Subject": "Ministry and Mission",
      "Year": 2
    },
    {
      "Subject": "New Testament",
      "Year": 2
    },
    {
      "Subject": "Old Testament",
      "Year": 2
    },
    {
      "Subject": "Philosophy",
      "Year": 2
    },
    {
      "Subject": "Christian Ethics",
      "Year": 3
    },
    {
      "Subject": "Doctrine",
      "Year": 3
    },
    {
      "Subject": "Hebrew",
      "Year": 3
    },
    {
      "Subject": "Intentional Ministry Reflection",
      "Year": 3
    },
    {
      "Subject": "Ministry and Mission",
      "Year": 3
    },
    {
      "Subject": "New Testament",
      "Year": 3
    },
    {
      "Subject": "Old Testament",
      "Year": 3
    },
    {
      "Subject": "Philosophy",
      "Year": 3
    },
    {
      "Subject": "Advanced Pastoral Ministry",
      "Year": 4
    },
    {
      "Subject": "Advanced Topics in Biblical Greek and Exegesis",
      "Year": 4
    },
    {
      "Subject": "Anglican Identity and Liturgy",
      "Year": 4
    },
    {
      "Subject": "Atonement",
      "Year": 4
    },
    {
      "Subject": "Christology",
      "Year": 4
    },
    {
      "Subject": "Church History",
      "Year": 4
    },
    {
      "Subject": "Daniel (Hebrew and Aramaic)",
      "Year": 4
    },
    {
      "Subject": "Hermeneutics",
      "Year": 4
    },
    {
      "Subject": "Ministry and Mission",
      "Year": 4
    },
    {
      "Subject": "New Testament",
      "Year": 4
    },
    {
      "Subject": "Old Testament",
      "Year": 4
    },
    {
      "Subject": "Project",
      "Year": 4
    }
   ]
  

const year1Readings = readingsJSON.filter(bit => bit.Year===1)
const year2Readings = readingsJSON.filter(bit => bit.Year===2)
const year3Readings = readingsJSON.filter(bit => bit.Year===3)
const year4Readings = readingsJSON.filter(bit => bit.Year===4)


function MooreCollegeReadings() {

    return(
        <>
<p>Before I started at Moore College, I sometimes wondered what sorts of things theological students had to read. Now that I'm a theological student, I want to keep some kind of record of what lecturers ask us to read, and I'm posting it here because perhaps others are curious as well.</p>
<p>A few disclaimers:</p>
<ul>
  <li>Similar to other degrees, the reading lists at Moore can change from year to year.</li>
  <li>This snapshot was taken in January 2023.</li>
  <li>Full books are listed in black.</li>
  <li>Books where only particular sections were recommended are listed in <span style={{color: "rgb(180, 150, 45)"}}>gold.</span></li>
  <li>Journal articles are listed in <span style={{color: "rgb(65, 100, 210)"}}>blue.</span></li>
  <li>I haven't specified which readings are 'set' and which are 'recommended'.</li>
  <li>Readings are sorted by year, then by subject, then by author's surname.</li>
</ul>

<div className="mb-4">
<div className="mb-2" style={{fontSize: "60px"}}>Year 1</div>
  {mooreCourses.filter(bit => bit.Year===1).map(bit => {
    return(
      <div className="mb-3">
      <div className="mb-3" style={{fontSize: "30px"}}>{bit.Subject}</div>
      {year1Readings.filter(thing => thing.Subject===bit.Subject).map(thing => {
        return(
          <div className="mb-3" style={{color: thing.Journal != "n/a" ? "rgb(65, 100, 210)" : thing.fullBook==="n" ? "rgb(180, 150, 45)" : null}}>
          <div>{thing.Authors}. {thing.Title} {thing.Journal != "n/a" ? "(from the journal: " + thing.Journal + ")": null}</div>
          </div>
        )
      })}
      </div>
    )
  })}
  </div>

  <div className="mb-4">
<div className="mb-2" style={{fontSize: "60px"}}>Year 2</div>
  {mooreCourses.filter(bit => bit.Year===2).map(bit => {
    return(
      <div className="mb-3">
      <div className="mb-3" style={{fontSize: "30px"}}>{bit.Subject}</div>
      {year2Readings.filter(thing => thing.Subject===bit.Subject).map(thing => {
        return(
          <div className="mb-3" style={{color: thing.Journal != "n/a" ? "rgb(65, 100, 210)" : thing.fullBook==="n" ? "rgb(180, 150, 45)" : null}}>
          <div>{thing.Authors}. {thing.Title} {thing.Journal != "n/a" ? "(from the journal: " + thing.Journal + ")": null}</div>
          </div>
        )
      })}
      </div>
    )
  })}
  </div>

  <div className="mb-4">
<div className="mb-2" style={{fontSize: "60px"}}>Year 3</div>
  {mooreCourses.filter(bit => bit.Year===3).map(bit => {
    return(
      <div className="mb-3">
      <div className="mb-3" style={{fontSize: "30px"}}>{bit.Subject}</div>
      {year3Readings.filter(thing => thing.Subject===bit.Subject).map(thing => {
        return(
          <div className="mb-3" style={{color: thing.Journal != "n/a" ? "rgb(65, 100, 210)" : thing.fullBook==="n" ? "rgb(180, 150, 45)" : null}}>
          <div>{thing.Authors}. {thing.Title} {thing.Journal != "n/a" ? "(from the journal: " + thing.Journal + ")": null}</div>
          </div>
        )
      })}
      </div>
    )
  })}
  </div>


  <div className="mb-4">
<div className="mb-2" style={{fontSize: "60px"}}>Year 4</div>
  {mooreCourses.filter(bit => bit.Year===4).map(bit => {
    return(
      <div className="mb-3">
      <div className="mb-3" style={{fontSize: "30px"}}>{bit.Subject}</div>
      {year4Readings.filter(thing => thing.Subject===bit.Subject).map(thing => {
        return(
          <div className="mb-3" style={{color: thing.Journal != "n/a" ? "rgb(65, 100, 210)" : thing.fullBook==="n" ? "rgb(180, 150, 45)" : null}}>
          <div>{thing.Authors}. {thing.Title} {thing.Journal != "n/a" ? "(from the journal: " + thing.Journal + ")": null}</div>
          </div>
        )
      })}
      </div>
    )
  })}
  </div>
    </>
    )
}

export default MooreCollegeReadings;
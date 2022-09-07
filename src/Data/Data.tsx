import { HomeOutlined, DashboardOutlined, LibraryBooksOutlined, PeopleOutline, ShowChartOutlined, MonetizationOnOutlined, People, GolfCourse } from "@mui/icons-material";
import Img1 from '../imgs/img1.png';
import Img2 from '../imgs/img2.png';
import Img3 from '../imgs/img3.png';

export const slideDatas = [
    {
        icon : <DashboardOutlined />,
        label : "Dashboard",
        route : "/"
    },
    {
        icon : <HomeOutlined />,
        label : "Home",
        route : "/home"
    },
    {
        icon : <LibraryBooksOutlined />,
        label : "Courses",
        route : "/courses"
    },
    {
        icon : <PeopleOutline />,
        label : "Students",
        route : "/students"
    },
    {
        icon : <ShowChartOutlined />,
        label : "Analytics",
        route : "/analytics"
    },
]

export const cardDatas = [
    {
        title: "Student",
        color: {
            backGround : "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 70,
        value: "28,120",
        icon : <People />,
        series : [
            {
                name : "Sales",
                data : [31, 40, 28, 51, 38, 20, 70],
            }
        ]
    },
    {
        title: "Courses",
        color: {
            backGround : "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow : "0px 10px 20px 0px #fdc0c7",
        },
        barValue : 80,
        value: "20",
        icon : <GolfCourse />,
        series : [
            {
                name : "Sales",
                data : [18, 70, 38, 51, 28, 60, 40],
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround : "linear-gradient(rgb(248, 212, 154) -146%, rgb(255, 202, 113) -46%)",
            boxShadow : "0px 10px 20px 0px #fdc0c7",
        },
        barValue : 60,
        value: "1,520,000",
        icon : <MonetizationOnOutlined />,
        series : [
            {
                name : "Sales",
                data : [25, 50, 31, 41, 68, 40, 55],
            }
        ]
    }
];

// Update Card
export const updateDatas = [
    {
        img: Img1,
        name: "Linus Torvalds",
        msg: "This is the best class I have ever seen",
        time: "1 hour ago",
    },
    {
        img: Img2,
        name: "Linus Torvalds",
        msg: "This is the best class I have ever seen",
        time: "16 hours ago",
    },
    {
        img: Img3,
        name: "Linus Torvalds",
        msg: "This is the best class I have ever seen",
        time: "1 day ago",
    },
]
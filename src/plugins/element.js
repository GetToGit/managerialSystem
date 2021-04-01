/**
 * 按需引入 element 组件 
 **/ 

import Vue from 'vue'

import {
    Button,
    Container,
    Header,
    Main,
    Aside,
    Footer,
    Row,
    Col,
    Menu,
    MenuItem,
    Submenu,
    Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Message,
    MessageBox,
    Table,
    TableColumn,
    Upload
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
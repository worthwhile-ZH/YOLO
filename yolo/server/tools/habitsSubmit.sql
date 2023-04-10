drop table if exists `habitsSubmit`;

create table  `habitsSubmit`(
    `id` int(11) not null auto_increment,
    `openid` varchar(100) not null,
    `name` text not null,
    `color` varchar(100) not null,
    `text` text not null,
    `src` text not null,
    `create_time`  timestamp not null default current_timestamp,
    `del` varchar(100) default null,
    primary key(`id`)

)default charset=`utf8`;
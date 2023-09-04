<%@ page language="C#" autoeventwireup="true" codebehind="EmpWeekPlan.aspx.cs" inherits="Aepri.InfoDev.DPP.Web.PlanManage.EmpWeekPlan" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>员工周计划</title>
    <style type="text/css">
        body
        {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: #555;
            background-color: #fff;
        }

        .table-title
        {
            border-collapse: collapse;
            width: 100%;
            border: solid 1px #ddd;
            font-size: 12px;
            font-weight: bold;
            color: #555;
        }

            .table-title td
            {
                text-align: center;
                padding: 5px;
                height: 25px;
            }

        .table-days
        {
            border-collapse: collapse;
            width: 100%;
        }

            .table-days td
            {
                border: solid 1px #ddd;
                height: 150px;
                vertical-align: top;
                width: 14px;
            }

        .td-gray
        {
            color: #ccc;
            background-color: #f7f7f7;
        }

        .div-task-item
        {
            background-color: #bfecff;
            margin-top: 2px;
            padding: 2px;
            height: 14px;
            cursor: default;
            /* margin-left: 5px;
            margin-right: 5px;*/
        }

            .div-task-item:hover
            {
                background-color: #ff5588 !important;
            }

        .div-no-task-item
        {
            margin-top: 2px;
            padding: 2px;
            height: 14px;
        }

        .td-selected
        {
            background-color: #e0f2f8 !important;
        }

        .div-day-title
        {
            text-align: right;
            padding: 3px;
        }

        .td-today
        {
            background-color: #fcd7d7;
        }

            .td-today div:first-child
            {
                border-top: solid 2px #f72f37;
                padding-top: 1px;
            }

        .highlight-task
        {
            background-color: #ff3366 !important;
            color: #fff !important;
        }
    </style>
    <script src="<%=ResolveClientUrl(" ~ js jquery-1.7.2.min.js") %>" type="text/javascript"></script>
    <script type="text/javascript">
        var data = {
            empCode: '101',
            list: [
                  //说明：id暂时无用
                  { id: '01', taskCode: '001', title: '任务一', content: '测试内容', year: 2016, month: 1, day: 3 },
                  { id: '02', taskCode: '001', title: '任务一', content: '测试内容', year: 2016, month: 1, day: 4 },
                  //{ id: '02', taskCode: '001', title: '任务一', content: '测试内容', year: 2016, month: 1, day: 5 },
                  { id: '03', taskCode: '002', title: '任务二', content: '测试内容', year: 2016, month: 1, day: 4 },
                  //{ id: '04', taskCode: '002', title: '任务二', content: '测试内容', year: 2016, month: 1, day: 5 },
                  { id: '05', taskCode: '003', title: '任务三', content: '测试内容', year: 2016, month: 1, day: 5 },
                  { id: '06', taskCode: '003', title: '任务三', content: '测试内容', year: 2016, month: 1, day: 6 },
                  { id: '07', taskCode: '004', title: '任务四', content: '测试内容', year: 2016, month: 1, day: 6 },
                  { id: '08', taskCode: '005', title: '任务五', content: '测试内容', year: 2016, month: 1, day: 6 },
                  { id: '09', taskCode: '005', title: '任务五', content: '测试内容', year: 2016, month: 1, day: 7 },
                  { id: '10', taskCode: '006', title: '任务六', content: '测试内容', year: 2016, month: 1, day: 7 },
                  //{ id: '11', taskCode: '006', title: '任务六', content: '测试内容', year: 2016, month: 1, day: 8 },
                  //{ id: '12', taskCode: '006', title: '任务六', content: '测试内容', year: 2016, month: 1, day: 9 },
                  { id: '13', taskCode: '007', title: '任务七', content: '测试内容', year: 2016, month: 1, day: 6 },
                  { id: '13', taskCode: '007', title: '任务七', content: '测试内容', year: 2016, month: 1, day: 7 },
                  { id: '14', taskCode: '007', title: '任务七', content: '测试内容', year: 2016, month: 1, day: 8 },
                  //{ id: '15', taskCode: '008', title: '任务八', content: '测试内容', year: 2016, month: 1, day: 6 },
                  //{ id: '15', taskCode: '008', title: '任务八', content: '测试内容', year: 2016, month: 1, day: 7 },
                  { id: '15', taskCode: '008', title: '任务八', content: '测试内容', year: 2016, month: 1, day: 8 },
                  { id: '15', taskCode: '008', title: '任务八', content: '测试内容', year: 2016, month: 1, day: 9 },
                  { id: '15', taskCode: '009', title: '任务九', content: '测试内容', year: 2016, month: 1, day: 4 },
                  { id: '15', taskCode: '009', title: '任务九', content: '测试内容', year: 2016, month: 1, day: 5 },
                  { id: '15', taskCode: '010', title: '任务十', content: '测试内容', year: 2016, month: 1, day: 10 },
                  { id: '15', taskCode: '010', title: '任务十', content: '测试内容', year: 2016, month: 1, day: 9 },
                  { id: '15', taskCode: '011', title: '任务十一', content: '测试内容', year: 2015, month: 12, day: 31 },
                  { id: '15', taskCode: '011', title: '任务十一', content: '测试内容', year: 2016, month: 1, day: 1 },
                  { id: '15', taskCode: '011', title: '任务十一', content: '测试内容', year: 2016, month: 1, day: 2 },
                  { id: '15', taskCode: '011', title: '任务十一', content: '测试内容', year: 2016, month: 1, day: 3 }
            ]
        };

        var taskCodeList = new Array();
        function createTaskCodeList(data, taskCodeList) {
            for (var i = 0; i < data.list.length; i++) {
                var bl = true;
                for (var j = 0; j < taskCodeList.length; j++) {
                    if (taskCodeList[j] == data.list[i].taskCode) {
                        bl = false;
                    }
                }
                if (bl) {
                    taskCodeList.push(data.list[i].taskCode);
                }
            }
        }
        createTaskCodeList(data, taskCodeList);

        $(function () {
            $(".table-days").parent().height($(window).height() - $(".table-days").parent().position().top - 10);

            $("#year").change(function () {
                var year = $("#year").val();
                var month = $("#month").val();
                createPlanTable(year, month);
            });
            $("#month").change(function () {
                var year = $("#year").val();
                var month = $("#month").val();
                createPlanTable(year, month);
            });
            gotoToday();

            //ie6、7
            if ($.browser.msie) {
                if (parseInt($.browser.version) == 7 || parseInt($.browser.version) == 6) {
                    $("#table-days").width($("#table-days").width() - 20);
                    $("#table-days").parent().height($("#table-days").parent().height() - 15);
                }
            }
        }); //end $

        //创建计划表格
        function createPlanTable(year, month) {
            var html = '';
            var table = $("#table-days");
            var days = getDaysOfMonth(year, month);
            var preDays = getDaysOfPreMonth(year, month);
            var week = getWeek(year, month, 1);
            var day = preDays - week + 1;
            var grayDay = 'td-gray'; //置灰
            var current = false;
            var today = new Date();

            for (var i = 0; i < (days + week - 1) / 7 ; i++) {
                html += '<tr>';
                for (var j = 0; j < 7; j++) {
                    day++;
                    if (current == false && day > preDays) {
                        day = 1;
                        grayDay = '';
                        current = true;
                    }
                    if (current == true && day > days) {
                        day = 1;
                        grayDay = 'td-gray';
                        current = false;
                    }

                    var todayClass = '';
                    if (current && today.getFullYear() == year && today.getMonth() == month - 1 && today.getDate() == day) {
                        todayClass = 'td-today';
                    }
                    html += '<td day="' + day + '" class=" ' + grayDay + ' ' + todayClass + '"><div class="div-day-title">' + day + '</div>';

                    var virtualTaskCount = 0;
                    for (var k = 0; k < data.list.length; k++) {
                        var model = data.list[k];
                        if (grayDay == '' && year == model.year && month == model.month && day == model.day) {
                            var taskIndex = getTaskIndex(taskCodeList, model.taskCode);
                            for (var m = virtualTaskCount; m < taskIndex; m++) {
                                html += '<div class="div-no-task-item"></div>';
                                virtualTaskCount++;
                            }
                            html += '<div class="div-task-item" taskCode="' + model.taskCode + '" style="background-color:#' + getColor(taskCodeList, model.taskCode) + ';">' + model.title + '</div>';
                            virtualTaskCount++;
                        }
                    }

                    html += '</td>';
                }
                html += '</tr>';
            }
            table.html(html);

            //优化显示
            if (true) {
                for (var i = 0; i < taskCodeList.length; i++) {
                    table.find("tr").each(function () {
                        var tr = $(this);

                        var taskItem = tr.find("div[taskCode='" + taskCodeList[i] + "']");
                        if (taskItem.length > 0) {
                            var k = -1;
                            while (k != -2) {
                                k++;
                                var bl = true;
                                taskItem.each(function () {
                                    var prev = $(this).parent().find("div:eq(" + (k + 1) + ")");
                                    if (!prev || prev.length == 0) k = -2;
                                    if (prev && prev.attr("taskCode") == taskCodeList[i]) k = -2;
                                    if (!$(this).parent().attr("class") || !prev || prev.length == 0 || prev.attr("class").indexOf("div-no-task-item") == -1) {
                                        bl = false;
                                    }
                                });
                                if (bl) {
                                    taskItem.each(function () {
                                        var item = $(this);
                                        var prev = item.parent().find("div:eq(" + (k + 1) + ")");
                                        if (prev.length > 0) {
                                            item.after('<div class="div-no-task-item"></div>');
                                            item.wrap("<div></div>");
                                            prev.after(item.parent().html());
                                            prev.remove();
                                            item.parent().remove();
                                        }
                                    });
                                }

                            }
                        }
                    });
                } //end for taskCodeList
                //去空
                table.find("td").each(function () {
                    var td = $(this);
                    while (true) {
                        var div = td.find("div:last");
                        if (div.attr("class").indexOf("div-no-task-item") != -1) {
                            div.remove();
                        }
                        else {
                            break;
                        }
                    }
                });
            } //end 优化显示

            //日期td单击双击
            table.find("td").each(function () {
                var td = $(this);
                var grayDay = td.attr('class').indexOf('td-gray') == -1;
                td.click(function () {
                    if (grayDay) {
                        if (td.attr("class").indexOf("td-selected") != -1) {
                            td.removeClass("td-selected");
                        } else {
                            $(".td-selected").removeClass("td-selected");
                            td.addClass("td-selected");
                        }
                    }
                });
                td.dblclick(function () {
                    if (grayDay) {
                        add(td.attr("day"));
                    }
                });
            });

            //任务单击双击
            $(".div-task-item").each(function () {
                var taskItemDiv = $(this);
                var taskCode = taskItemDiv.attr("taskCode");
                taskItemDiv.click(function (evt) {
                    $(".div-task-item").removeClass("highlight-task");
                    table.find("div[taskCode='" + taskCode + "']").addClass("highlight-task");
                    evt.stopPropagation();
                });
                taskItemDiv.dblclick(function (evt) {
                    evt.stopPropagation();
                });
            });
        }

        //创建新计划
        function add(day) {
            data.list.push({ id: '15', taskCode: '000', title: '测试新增', content: '测试内容', year: 2016, month: 1, day: parseInt(day) });
            createTaskCodeList(data, taskCodeList)
            var scrollTop = $("#div-days").scrollTop();
            $("#month").change();
            $("#div-days").scrollTop(scrollTop);
        }

        //今天
        function gotoToday() {
            var today = new Date();
            $("#year").val(today.getFullYear());
            $("#month").val(today.getMonth() + 1);
            $("#month").change();
            var top = $(".td-today").position().top - $(".table-days").position().top;
            var div = $("#div-days").scrollTop(top);
            var div = $(".td-selected").removeClass("td-selected");
        }

        //上月
        function preMonth() {
            var year = $("#year").val();
            var month = $("#month").val();
            if (month == 1) {
                $("#year").val(parseInt(year) - 1);
                $("#month").val(12);
            } else {
                $("#month").val(parseInt(month) - 1);
            }
            $("#month").change();
            $("#div-days").scrollTop($(window).height());
        }

        //下月
        function nextMonth() {
            var year = $("#year").val();
            var month = $("#month").val();
            if (month == 12) {
                $("#year").val(parseInt(year) + 1);
                $("#month").val(1);
            } else {
                $("#month").val(parseInt(month) + 1);
            }
            $("#month").change();
            $("#div-days").scrollTop(0);
        }

        //获取task索引
        function getTaskIndex(taskCodeList, taskCode) {
            var pos = 0;
            for (var i = 0; i < taskCodeList.length; i++) {
                if (taskCodeList[i] == taskCode) {
                    break;
                }
                pos++;
            }
            return pos;
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div style="padding: 5px;">
            <div style="padding: 10px;">
                <input type="button" value="今天" onclick="gotoToday()">
                <input type="button" value="<" onclick="preMonth()">
                <select id="year" name="year">
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                </select>
                年
                 <select id="month" name="month">
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                 </select>
                月
                <input type="button" value=">" onclick="nextMonth()">
            </div>
            <div style="margin-top: 5px;">
                <table class="table-title" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>星期一</td>
                        <td>星期二</td>
                        <td>星期三</td>
                        <td>星期四</td>
                        <td>星期五</td>
                        <td>星期六</td>
                        <td>星期日</td>
                    </tr>
                </table>
            </div>
            <div id="div-days" style="height: 350px; overflow: auto; margin-top: -1px; border-bottom: solid 1px #ddd;">
                <table id="table-days" class="table-days" cellpadding="0" cellspacing="0">
                </table>
            </div>
        </div>
    </form>
    <script type="text/javascript">
        //获取当月天数
        function getDaysOfMonth(year, month) {
            var d = new Date(year, month, 0);
            return d.getDate();
        }

        //获取前一个月天数
        function getDaysOfPreMonth(year, month) {
            if (month == 1) {
                month = 12;
                year = year - 1;
            }
            else {
                month = month - 1;
            }
            var d = new Date(year, month, 0);
            return d.getDate();
        }

        //获取当天星期数(0到6)
        function getWeek(year, month, day) {
            var d = new Date(year, month - 1, day);
            return d.getDay();
        }

        //颜色集合
        var myColor = [
            'ccddff',
            'ccffdd',
            'eeccff',
            'eeffcc',
            'ffccee',
            'ffeecc'
        ];

        //获取颜色
        function getColor(taskCodeList, taskCode) {
            var pos = 0;
            for (var i = 0; i < taskCodeList.length; i++) {
                if (taskCodeList[i] == taskCode) {
                    break;
                }
                pos++;
                if (pos > myColor.length - 1) {
                    pos = 0;
                }
            }
            return myColor[pos];
        }
    </script>
</body>
</html></%@>
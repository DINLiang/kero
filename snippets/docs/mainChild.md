# ���ӱ�

# ������Դ

http://design.yyuap.com/static/uui/latest/css/font-awesome.css

http://design.yyuap.com/static/uui/latest/css/u.css

http://design.yyuap.com/static/uui/latest/css/grid.css

http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js

http://design.yyuap.com/static/uui/latest/js/u-polyfill.js

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/js/u-grid.js

# ���ʹ��

1���������ӱ�DOMԪ��

	<div class="u-container-fluid u-widget-bg">
	    <div class="u-row">
		<div class="u-col-md-12">
		    <div class="u-widget  u-widget-right">
			<div class="u-widget-heading">
			    <h3 class="u-widget-title">����</h3>
			</div>
			<div class="u-widget-body" style="margin-bottom: 30px">
			    <div id="mainGridDiv" u-meta='{"id":"mainGrid","data":"mainDataTable","type":"grid","onRowSelected":"mainGridRowSelect"}'>
				<div options='{"field":"name","dataType":"String","title":"����"}'></div>
				<div options='{"field":"tel","dataType":"String","title":"�ֻ�"}'></div>
				<div options='{"field":"email","dataType":"String","title":"�ʼ�"}'></div>
				<div options='{"field":"depart","dataType":"String","title":"����"}'></div>
				<div options='{"field":"company","dataType":"String","title":"��˾"}'></div>
			    </div>
			</div>
		    </div>
		</div>
		<div class="u-col-md-12">
		    <div class="u-widget  u-widget-right">
			<div class="u-widget-heading">
			    <h3 class="u-widget-title">�ӱ�</h3>
			</div>
			<div class="u-widget-body" style="margin-bottom: 30px">
			    <div id="childGridDiv" u-meta='{"id":"childGrid","data":"childDataTable","type":"grid"}'>
				<div options='{"field":"name","dataType":"String","title":"������"}'></div>
				<div options='{"field":"date","dataType":"String","title":"����"}'></div>
				<div options='{"field":"type","dataType":"String","title":"��������"}'></div>
				<div options='{"field":"detail","dataType":"String","title":"����"}'></div>
				<div options='{"field":"count","dataType":"String","title":"�������"}'></div>
			    </div>
			</div>
		    </div>
		</div>
	    </div>
	</div>

 #mainGridDiv Ϊ�����Ӧ�ı��ؼ��Ķ���div��#childGridDivΪ�ӱ��Ӧ�ı��ؼ��Ķ���div��
2������viewModel

	viewModel = {
		// �����Ӧ��dataTable
		mainDataTable: new u.DataTable({
		    meta: {
				"name": "",
				"tel": "",
				"email": "",
				"depart": "",
				"company": "",
		    }
		}),
		// �ӱ��Ӧ��dataTable
		childDataTable: new u.DataTable({
		    meta: {
				"name": "",
				"date": "",
				"type": "",
				"detail": "",
				"count": "",
		    }
		}),
		//�����Ӧ�ı��ؼ�ѡ����ʱִ�е�function
		mainGridRowSelect: function(obj){
				var filterName = obj.rowObj.value.name;
				var newData = filterData(childData,filterName);
				viewModel.childDataTable.removeAllRows();
				viewModel.childDataTable.setSimpleData(newData);
		}
	}
 mainDataTableΪ�����Ӧ��dataTable��childDataTableΪ�ӱ��Ӧ��dataTable��mainGridRowSelectΪ�����Ӧ�ı��ؼ�ѡ����ʱִ�е�function��
 3�������ӱ����function

	/**
	 ## �ӱ�����У�飺
	 *  data: �ӱ����ݼ���
	 *  filtername: ���˲���ƥ��ֵ
	 */
	filterData = function(data,filtername){
        var temp = []
        for(var i in data){
            if(data[i].name === filtername){
                temp.push(data[i]);
            }
        }
        return temp;
    }
 4������app
 
	var app = u.createApp({
		el: 'body',
		model: viewModel
	});
	
5���������ӱ����ݼ��ϲ�Ϊ�����������

	// �������ӱ�������Ϣ
	var mainData = [{
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '����',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '����',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '����',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '����',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '����',
            tel: '13610068888'
        }];
	var childData = [{
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "�Ӱ�򳵷���",
            detail: "�Ӱ�",
            name: '����',
            count: '60'
        }];
    // Ϊ�����������
	viewModel.mainDataTable.setSimpleData(mainData);
# ʾ��

replaceExamp

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./styles.css";

const columns = [
  {
    title: "序号",
    key: "ROW_NO",
    dataIndex: "ROW_NO",
    width: 70
  },
  {
    title: "创建时间",
    key: "b71cb071-7c21-4cb2-bfc9-551f8a2644ff",
    dataIndex: "CREATE_TIME",
    width: 250
  },
  {
    title: "编号",
    key: "01ee0e1e-0432-4999-843f-4f652e240c2b",
    dataIndex: "CODE",
    width: 150
  },
  {
    title: "名称",
    key: "436f650a-056d-4403-a366-21e258ae0ba6",
    dataIndex: "NAME",
    width: 150
  },
  {
    title: "填入类型",
    key: "8285093a-25d5-45e3-bb3c-7ee2ae974829",
    dataIndex: "INPUT_TYPE",
    width: 150
  },
  {
    title: "启用标志",
    key: "03046ee6-5da7-48f3-8849-38b2bb88657f",
    dataIndex: "ENABLE_STATUS",
    width: 150
  },
  {
    title: "品名",
    key: "453aab72-5ae8-42de-8164-f6e75c9aee38",
    dataIndex: "PRODUCT_NAME",
    width: 250
  },
  {
    title: "品号",
    key: "74a8d526-407d-41b7-b67e-865894744884",
    dataIndex: "PRODUCT_CODE",
    width: 150
  },
  {
    title: "检验项目名称",
    key: "f049ed8b-d9b0-4d74-9f10-d75b0ef9481f",
    dataIndex: "ITEM_NAME",
    width: 250
  },
  {
    title: "检验项目编号",
    key: "bbb78c2c-1408-4e36-a0d9-9ef85bcad093",
    dataIndex: "ITEM_CODE",
    width: 150
  },
  {
    title: "样本个数",
    key: "a1371501-e55f-45b1-8751-10e06aaa1a7c",
    dataIndex: "SAMPLE_QTY",
    width: 150
  },
  {
    title: "操作",
    key: "ca5145a5-7668-49e0-81a4-52c8c6acc1d6",
    dataIndex: "",
    fixed: "right",
    width: 64
  }
];

const data = [
  {
    ID: "752c3118-36f6-a0e7-2f38-3c4fe69d5243",
    ROW_NO: 1,
    CREATE_TIME: "2019-08-30 16:01:34",
    CODE: "S33020039",
    NAME: "`123456789",
    INPUT_TYPE: 0,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "",
    PRODUCT_NAME: "",
    ITEM_NAME: "产线悬挂的SOP是否齐套，所有工序是否严格按SOP操作",
    ITEM_CODE: "080901",
    SAMPLE_QTY: 0
  },
  {
    ID: "21e9adc5-b3b1-748c-6ac1-458fb4314884",
    ROW_NO: 2,
    CREATE_TIME: "2019-08-20 15:31:05",
    CODE: "S33020038",
    NAME: "`S33020038",
    INPUT_TYPE: 0,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064700084",
    PRODUCT_NAME: "无线模块组件_Z-Wave_ZM5101_V-D-07_V2.0_RO",
    ITEM_NAME: "产线悬挂的SOP是否齐套，所有工序是否严格按SOP操作",
    ITEM_CODE: "080901",
    SAMPLE_QTY: 4
  },
  {
    ID: "a1dc3ec8-1823-8110-3f52-68e0ffff243f",
    ROW_NO: 3,
    CREATE_TIME: "2019-08-15 11:10:11",
    CODE: "S081504",
    NAME: "`枚举未填",
    INPUT_TYPE: 2,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "检查装箱完毕后重量是否要求，无少装、漏装等不良（产线每箱是否称重、电子称在设定值内并报警）",
    ITEM_CODE: "080504",
    SAMPLE_QTY: 2
  },
  {
    ID: "1161ed05-e779-8b13-bcfb-1f10aeb001cd",
    ROW_NO: 4,
    CREATE_TIME: "2019-08-15 11:08:36",
    CODE: "S081503",
    NAME: "`数值已填22",
    INPUT_TYPE: 1,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "确认产线整灯测试电压及功率参数是否正确并点检？且产品处于出厂模式状态？",
    ITEM_CODE: "080503",
    SAMPLE_QTY: 3
  },
  {
    ID: "82258ff3-a115-2a4c-f610-cac8f7189119",
    ROW_NO: 5,
    CREATE_TIME: "2019-08-15 11:07:36",
    CODE: "S081503",
    NAME: "数值未提1",
    INPUT_TYPE: 1,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "确认产线整灯测试电压及功率参数是否正确并点检？且产品处于出厂模式状态？",
    ITEM_CODE: "080503",
    SAMPLE_QTY: 3
  },
  {
    ID: "82258ff3-a115-2a4c-f610-cac8f189119",
    ROW_NO: 6,
    CREATE_TIME: "2019-08-15 11:07:36",
    CODE: "S081503",
    NAME: "数值未提1",
    INPUT_TYPE: 1,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "确认产线整灯测试电压及功率参数是否正确并点检？且产品处于出厂模式状态？",
    ITEM_CODE: "080503",
    SAMPLE_QTY: 3
  },
  {
    ID: "82258f3-a115-2a4c-f610-cac8f7189119",
    ROW_NO: 7,
    CREATE_TIME: "2019-08-15 11:07:36",
    CODE: "S081503",
    NAME: "数值未提1",
    INPUT_TYPE: 1,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "确认产线整灯测试电压及功率参数是否正确并点检？且产品处于出厂模式状态？",
    ITEM_CODE: "080503",
    SAMPLE_QTY: 3
  },
  {
    ID: "82258ff3-a11-2a4c-f610-cac8f7189119",
    ROW_NO: 8,
    CREATE_TIME: "2019-08-15 11:07:36",
    CODE: "S081503",
    NAME: "数值未提1",
    INPUT_TYPE: 1,
    ENABLE_STATUS: 0,
    PRODUCT_CODE: "2064600030",
    PRODUCT_NAME: "智能主体_键盘主体_6A-KP-V-A-A0-01_R_H2.0.0_F2.14",
    ITEM_NAME:
      "确认产线整灯测试电压及功率参数是否正确并点检？且产品处于出厂模式状态？",
    ITEM_CODE: "080503",
    SAMPLE_QTY: 3
  }
];

function App() {
  return (
    <div className="App">
      <Table
        rowKey="ID"
        // pagination={paginationConfig}
        dataSource={data}
        columns={columns}
        bordered
        // rowSelection={tableConfig.checked ? rowSelection : null}
        scroll={{ x: 2000, y: 300 }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

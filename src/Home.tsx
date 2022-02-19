import { Col, PageHeader, Row, Select } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import './Home.css'
import { Option } from 'antd/lib/mentions';

function onChange(value: any) {
    console.log(`selected ${value}`);
}

function onSearch(val: any) {
    console.log('search:', val);
}

function Home() {
    return (
        <React.Fragment>
            <Row>
                <Col span={24}>
                    <PageHeader
                        className="site-page-header"
                        ghost
                        title="Starwars Universe"
                        backIcon={false}
                    />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col span={6}>
                    <Title level={4}>Pick a species</Title>
                </Col>
                <Col span={6}>
                    <Select<string | number, { value: string; children: string }>
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Home;
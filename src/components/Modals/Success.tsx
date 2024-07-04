import React from 'react';
import { Modal, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const Success: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(true);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            title={<span className='text-[16px] font-[NSTS] flex'><CheckCircleOutlined style={{ color: '#37B34A', fontSize: '150%', marginRight: '10px' }} /> สำเร็จ</span>}
            open={isModalVisible}
            centered
            closable={false}
            onOk={handleOk}
            width={415}
            footer={[
                <Button htmlType='submit' type="primary" onClick={handleOk}>
                    เรียบร้อย
                </Button>,
            ]}
        >
            <p className='ml-9 font-[NSTS]'>
                <li>ระบบได้รับข้อมูลการลงทะเบียนของท่านเรียบร้อยแล้ว</li>
                <li>โปรดรอการแจ้งยืนยันผลทาง SMS และ อีเมล</li>
                <li>ที่ลงทะเบียนไว้</li>
            </p>
        </Modal>
    );
};

export default Success;

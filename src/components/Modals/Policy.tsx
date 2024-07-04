import React from 'react';
import { Modal, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const Policy: React.FC<{ isModalOpen: boolean, policyOk: () => void, policyCancel: () => void, isChecked: boolean, onCheckboxChange: CheckboxProps['onChange'] }> = ({ isModalOpen, policyOk, policyCancel, isChecked, onCheckboxChange }) => {
    return (
        <>
            <Modal centered title="นโยบายความเป็นส่วนตัว" open={isModalOpen} onOk={policyOk} onCancel={policyCancel} footer={null}>
                <div className='border-b border-slate-300' />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vel minima labore, obcaecati, facilis sapiente necessitatibus minus velit eaque quia optio! Cupiditate voluptatum temporibus aliquam ipsa sequi obcaecati, maxime magni!</p>
                <h2 className='font-bold'>Header 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quidem officia culpa voluptatum vel dolores at obcaecati doloremque quod non?</p>
                <h2 className='font-bold'>Header 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nemo quaerat magni dignissimos autem accusamus rem magnam obcaecati nobis ab!</p>
                <div className='border-t mt-2 border-slate-300' />
                <div className='mt-2'>
                    <Checkbox checked={isChecked} onChange={onCheckboxChange} className='custom-checkbox'>ฉันรับทราบและยอมรับ</Checkbox>
                    <span className='text-Pgreen hover:underline cursor-pointer'>นโยบายความเป็นส่วนตัว</span>
                </div>
            </Modal>
        </>
    );
};

export default Policy;

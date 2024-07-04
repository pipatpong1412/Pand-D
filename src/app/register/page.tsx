'use client'
import React, { ChangeEventHandler, FormEvent, useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import { Input, Button, Form, Checkbox } from 'antd';
import Link from 'next/link';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Policy from '@/components/Modals/Policy';
import Success from '@/components/Modals/Success';
import type { CheckboxProps } from 'antd';
import { FieldType } from '@/interfaces/register.interface';

export default function RegisterPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [phone, setPhone] = useState<string>('')
    const [data, setData] = useState<FieldType>({
        firstname: '',
        lastname: '',
        idNumber: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const policyShow = () => {
        setIsModalOpen(true);
    };

    const policyOk = () => {
        setIsModalOpen(false);
    };

    const policyCancel = () => {
        setIsModalOpen(false);
    };

    const hdlCheckbox: CheckboxProps['onChange'] = (e) => {
        setIsChecked(e.target.checked);
    };

    const hdlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const hdlKeyPressName = (e: KeyboardEvent<HTMLInputElement>) => {
        const char = String.fromCharCode(e.which);
        if (!/^[\u0E00-\u0E7F]$/.test(char)) {
            e.preventDefault();
        }
    };

    const hdlKeyPressID = (e: KeyboardEvent<HTMLInputElement>) => {
        const char = String.fromCharCode(e.which);
        if (!/^\d*$/.test(char)) {
            e.preventDefault();
        }
    };

    const hdlPhoneChange = (value: string) => {
        setPhone(value);
        setData(prev => ({ ...prev, phone: value }));
    };

    const validPassword = () => {
        const password = data.password
        const confirmPassword = data.confirmPassword
        if (password != confirmPassword) {
            return Promise.reject('กรุณากรอกรหัสผ่านให้ตรงกัน');
        }
        return Promise.resolve();
    }

    const hdlSubmit = () => {
        console.log('Form data:', data);
        setIsSuccessModalOpen(true);
    };

    return (

        <div className='h-screen w-full flex'>
            <div className='w-1/2 relative'>
                <Image
                    src="https://s3-alpha-sig.figma.com/img/879b/a20a/61c41c725e2d8e942fbeb001c79ca1ba?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0vOuyOmNR0e6ZCGDgS~BrzN46AR4sqfvocXK4mEJYR-HD8pB8LdrahuCSfmBZjnzCiL3lf3eDF9OHdV6Wmdn0J9mS6ZjRFEhIl~UHPrihINAjHF2~-oRLnXXN0o~WYgubY0lzieemBoXi6VJQHYl8ezPT4-A2Crw2K7ph1nVt~8tTYkopRWfpJzNGN6ImCaeOa031RKvfyW9pYQzBGGIlBX0pnZk0JTaTJvIAJoUyT2BwAQZM1ioOKG9k0xE9VvPEULnUMM00Jfdju7iOVHx3J5A3P~faEJH~XEG0O35IMOslxYVu9wZazFrv2V49pS3yx3LIxPqk-Q7ztmGfu1NA__"
                    layout='fill'
                    objectFit='cover'
                    alt="Background image"
                />
            </div>
            <div>
                <Link href='/login'><ArrowLeftOutlined className='text-Pgreen text-[35px] mt-10 ml-10 absolute' /></Link>
            </div>
            <div className='bg-white w-1/2 h-full flex items-center justify-center'>
                <div className='flex flex-col items-center w-2/4'>
                    <h1 className='text-3xl font-[NSTS] mb-5'>สมัครสมาชิก</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        className='w-full flex flex-col'
                        onFinish={hdlSubmit}
                    >
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-col w-1/2 pr-2'>
                                <label className='block text-gray-700 font-[NSTS] mb-2 '>
                                    ชื่อ
                                </label>
                                <Form.Item<FieldType>
                                    rules={[
                                        { required: true, message: 'กรุณากรอกชื่อ' },
                                    ]}
                                    name='firstname'
                                >
                                    <Input
                                        type='text'
                                        placeholder='ชื่อ'
                                        value={data.firstname}
                                        name='firstname'
                                        onChange={hdlChange}
                                        onKeyPress={hdlKeyPressName}
                                    />
                                </Form.Item>
                            </div>
                            <div className='flex flex-col w-1/2 pl-2'>
                                <label className='block text-gray-700 font-[NSTS] mb-2 '>
                                    นามสกุล
                                </label>
                                <Form.Item<FieldType>
                                    rules={[
                                        { required: true, message: 'กรุณากรอกนามสกุล' },
                                    ]}
                                    name='lastname'
                                >
                                    <Input
                                        type='text'
                                        placeholder='นามสกุล'
                                        value={data.lastname}
                                        name='lastname'
                                        onChange={hdlChange}
                                        onKeyPress={hdlKeyPressName}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <label className='block text-gray-700 font-[NSTS] mb-2 '>
                            เลขที่บัตรประจำตัวประชาชน
                        </label>
                        <Form.Item<FieldType>
                            rules={[
                                { required: true, message: 'กรุณากรอกเลขที่บัตรประจำตัวประชาชน' },
                                {
                                    pattern: /^\d{13}$/,
                                    message: 'กรุณากรอกตัวเลขให้ครบ'
                                }
                            ]}
                            name='idNumber'
                        >
                            <Input
                                maxLength={13}
                                type='text'
                                placeholder='เลขที่บัตรประจำตัวประชาชน'
                                value={data.idNumber}
                                name='idNumber'
                                onChange={hdlChange}
                                onKeyPress={hdlKeyPressID}
                            />
                        </Form.Item>

                        <label className='block text-gray-700 font-[NSTS] mb-2 '>
                            เบอร์โทรมือถือ
                        </label>
                        <Form.Item<FieldType>
                            rules={[
                                {
                                    required: true, message: 'กรุณากรอกเบอร์โทรมือถือ'
                                }]}
                            name='phone'
                        >
                            <PhoneInput
                                name='phone'
                                defaultCountry='th'
                                value={phone}
                                onChange={hdlPhoneChange}
                                inputClassName='custom-phone-input'
                                className='custom-phone-input-container'
                                inputStyle={{ padding: 10 }}
                            />
                        </Form.Item>

                        <label className='block text-gray-700 font-[NSTS] mb-2 '>
                            อีเมล
                        </label>
                        <Form.Item<FieldType>
                            rules={[
                                {
                                    type: 'email',
                                    message: 'รูปแบบอีเมลไม่ถูกต้อง'
                                },
                                { required: true, message: 'กรุณากรอกอีเมล' }]}
                            name='email'
                        >
                            <Input
                                type='text'
                                placeholder='อีเมล'
                                value={data.email}
                                name='email'
                                onChange={hdlChange}
                            />
                        </Form.Item>

                        <label className='block text-gray-700 font-[NSTS] mb-2 '>
                            รหัสผ่าน
                        </label>
                        <Form.Item<FieldType>
                            rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
                            name='password'
                        >
                            <Input
                                type='password'
                                placeholder='รหัสผ่าน'
                                value={data.password}
                                name='password'
                                onChange={hdlChange}
                            />
                        </Form.Item>

                        <label className='block text-gray-700 font-[NSTS] mb-2 '>
                            ยืนยันรหัสผ่าน
                        </label>
                        <Form.Item<FieldType>
                            rules={[
                                { required: true, message: 'กรุณากรอกรหัสยืนยัน' },
                                { validator: validPassword }]}
                            name='confirmPassword'
                        >
                            <Input
                                type='password'
                                placeholder='ยืนยันรหัสผ่าน'
                                value={data.confirmPassword}
                                name='confirmPassword'
                                onChange={hdlChange}
                            />
                        </Form.Item>

                        <div className=''>
                            {isChecked ? (
                                <Button type='primary' htmlType='submit' className='w-full bg-Pgreen text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline border'>
                                    สมัครสมาชิก
                                </Button>
                            ) : (
                                <Button disabled type='primary' htmlType='submit' className='w-full bg-Pgreen text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline border'>
                                    สมัครสมาชิก
                                </Button>
                            )}
                        </div>
                        <div className="flex items-center mt-5">
                            <Checkbox checked={isChecked} onChange={hdlCheckbox}>ฉันรับทราบและยอมรับ</Checkbox>
                            <span className='text-Pgreen hover:underline cursor-pointer' onClick={policyShow}>นโยบายความเป็นส่วนตัว</span>
                        </div>
                    </Form>
                </div>
            </div>
            <Policy isModalOpen={isModalOpen} policyOk={policyOk} policyCancel={policyCancel} isChecked={isChecked} onCheckboxChange={hdlCheckbox} />
            {isSuccessModalOpen && <Success />}
        </div>
    );
}

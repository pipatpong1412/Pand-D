'use client'
import React, { ChangeEventHandler, useState } from 'react'
import Image from "next/image";
import type { FormProps } from 'antd';
import { Input, Button, Form, Checkbox } from 'antd';
import Link from 'next/link';
import { Login } from '@/interfaces/login.interface';
import BackgroundImage from '@/components/BackgroundImage';

export default function LoginPage() {

    const [data, setData] = useState<Login>({
        email: '',
        password: ''
    })

    const hdlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target
        setData(prv => ({ ...prv, [name]: value }))
        console.log(data)
    }

    const onFinish: FormProps<Login>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<Login>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='h-screen w-full flex'>
            <div className='w-1/2 relative'>
                <BackgroundImage />
            </div>
            <div className='bg-white w-1/2 h-full flex items-center justify-center'>
                <div className='flex flex-col items-center gap-4 w-[400px]'>
                    <Image src='/icons/pan-d-logo.png'
                        width={100}
                        height={100}
                        alt='Pan D Logo'
                        className='mb-4'
                    />
                    <h1 className='text-[30px] font-[NSTS]'>ยินดีต้อนรับ</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='w-full flex flex-col'>

                        <div className=''>
                            <label className='block text-gray-700 text-sm font-bold mb-2 '>
                                อีเมล
                            </label>
                            <Form.Item<Login>
                                rules={[{
                                    type: 'email',
                                    message: 'รูปแบบอีเมลไม่ถูกต้อง'
                                },
                                { required: true, message: 'อีเมลของคุณไม่ถูกต้อง' }]}
                            >
                                <Input
                                    name='email'
                                    type='email'
                                    placeholder='ชื่อผู้ใช้'
                                    value={data.email}
                                    onChange={hdlChange}
                                />
                            </Form.Item>
                        </div>
                        <div className=''>
                            <Form.Item<Login>
                                name="password"
                                rules={[{ required: true, message: 'กรุณากรอกรหัสผ่านให้ครบถ้วน' }]}
                            >
                                <label className='block text-gray-700 text-sm font-bold mb-2'>
                                    รหัสผ่าน
                                </label>
                                <Input.Password
                                    value={data.password}
                                    onChange={hdlChange}
                                    placeholder='รหัสผ่าน' />
                            </Form.Item>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>

                                <Checkbox className='custom-checkbox '>จำข้อมูลของฉัน</Checkbox>
                            </div>
                            <div>
                                <Link href='/'><span className='hover:underline text-Pgreen'>ลืมรหัสผ่าน?</span></Link>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <Button
                                disabled={!data.email || !data.password}
                                type='primary'
                                htmlType='submit'
                                className='w-full'
                            >
                                เข้าสู่ระบบ
                            </Button>
                        </div>
                    </Form>
                    <div className='mt-2'>
                        <span>ยังไม่มีบัญชีผู้ใช้งาน ? <Link className='text-Pgreen hover:underline' href='/register'>สมัครสมาชิก</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

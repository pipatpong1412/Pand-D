'use client'
import React from 'react'
import Image from "next/image";
import type { FormProps } from 'antd';
import { Input, Button, Form, Checkbox } from 'antd';
import Link from 'next/link';
import 'antd/dist/reset.css';

export default function LoginPage() {

    type FieldType = {
        email?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='h-screen w-full flex'>
            <div className='w-1/2 relative'>
                <Image
                    src="https://s3-alpha-sig.figma.com/img/879b/a20a/61c41c725e2d8e942fbeb001c79ca1ba?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0vOuyOmNR0e6ZCGDgS~BrzN46AR4sqfvocXK4mEJYR-HD8pB8LdrahuCSfmBZjnzCiL3lf3eDF9OHdV6Wmdn0J9mS6ZjRFEhIl~UHPrihINAjHF2~-oRLnXXN0o~WYgubY0lzieemBoXi6VJQHYl8ezPT4-A2Crw2K7ph1nVt~8tTYkopRWfpJzNGN6ImCaeOa031RKvfyW9pYQzBGGIlBX0pnZk0JTaTJvIAJoUyT2BwAQZM1ioOKG9k0xE9VvPEULnUMM00Jfdju7iOVHx3J5A3P~faEJH~XEG0O35IMOslxYVu9wZazFrv2V49pS3yx3LIxPqk-Q7ztmGfu1NA__"
                    layout='fill'
                    objectFit='cover'
                    alt="Picture of the author"
                />
            </div>
            <div className='bg-white w-1/2 h-full flex items-center justify-center'>
                <div className='flex flex-col items-center gap-4 w-[400px]'>
                    <Image src='https://s3-alpha-sig.figma.com/img/2782/5a42/9843a1a5c873ca35702ba01288d74cc2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjuNeKwyrmAKQoBa83WKarlyJxsK9gVhLNzRQ0mi8idgFnDdI0jia2otG31E20~v1eakN13AUvBfbzmT0wxLd5QLDTjohVErEGtFY8ieYQbujRjYkF4uaKBykwv-sEbSqh9Y4YQ6PUCGbFCVak8VzgOfbtTdWNR2KId58Xqr4JRcHKLK4zRzNLS6LG~5qTdOxhS-aD3L9X2m0VXNZ~k80zs~Rv5d8AKdm2c5Yz43CqHgdrE-RBE12oziYZ5GyNrwqjKHhYOGs9T~lV7n4mpdcrMDsjpToy9lZSQF3H1iBoawYFND92fRt6p-O3pHeSTd6xeddiIEO7iFIw3F1RfuRA__'
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
                            <Form.Item<FieldType>
                                name="email"
                                rules={[{ required: true, message: 'อีเมลของคุณไม่ถูกต้อง' }]}
                            >
                                <Input
                                    type='email'
                                    placeholder='ชื่อผู้ใช้'
                                />
                            </Form.Item>
                        </div>
                        <div className=''>
                            <Form.Item<FieldType>
                                name="password"
                                rules={[{ required: true, message: 'กรุณากรอกรหัสผ่านให้ครบถ้วน' }]}
                            >
                                <label className='block text-gray-700 text-sm font-bold mb-2'>
                                    รหัสผ่าน
                                </label>
                                <Input.Password
                                    // className='focus:outline-none focus:shadow-outline focus:border-Pgreen'
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
                            <Button htmlType='submit' className='w-full loggin-btn bg-Pgreen text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline border'>
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

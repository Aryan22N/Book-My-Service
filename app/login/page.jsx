"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { loginWithEmail } from './actions';

const initialState = { error: null };

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(loginWithEmail, initialState);

    return (
        <div className="bg-[#f6f6f8] text-[#111318] font-sans antialiased h-screen flex flex-col overflow-hidden w-full m-0 p-0 absolute inset-0">
            <div className="flex flex-col md:flex-row h-full w-full">
                {/* Left Side: Visual & Quote */}
                <div className="hidden md:flex md:w-1/2 lg:w-5/12 bg-[#135bec] relative overflow-hidden flex-col justify-between p-12 text-white">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-multiply"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTa5Q_barN_8cX9PjYiX0MyFlNxVm3yx8rjOsB-pgk1M4p3t22VdHPu8lcOhk2MgKTGypONywvZboOpZkZVjs6sPPM-wkwxg-OzssboYnPmPq4odlP4p2DXBxz6pEpKD2uKS57Le7CWZeqpHPh1__3jvdas6s3hMxogIaAi7c2HlHYix3ontKMwKzheO0SgDuRQ9H5m2LypN7TB5GgGA3rVfdGP2voj8YcOW8_HalPLEkpmikRcYZYu3c2mNfjSZBsZHDO4KK_Onpe')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#135bec]/90 to-[#135bec]/40"></div>
                    </div>
                    {/* Logo */}
                    <div className="relative z-10 flex items-center gap-3">
                        <div className="size-8 text-white">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight">ServiceLink</h2>
                    </div>
                    {/* Quote */}
                    <div className="relative z-10 mt-auto max-w-lg">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                            Grow your business with ServiceLink
                        </h1>
                        <p className="text-lg text-white/90 font-medium">
                            "Since joining ServiceLink, my client base has doubled. It's the most effective tool I've used for business growth."
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                                <img
                                    alt="Portrait of a smiling professional man"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1sIh2M9LfrQE-wAbkTTdZP1FjVqcLZOmxhT1_7X04BBCbvnOlbHhc3nDWVXrVLP8F6yXaM9w2NEGOzNVI9aU3WxLWMF31vkSNeCq3DKtdTXUkJ7Llfk7H6kSKcLR47SeSXbw7zqe7eL2o44WVbf2eeP2vbk1X_VlJI1a2qTrXFxf1nm1KZTZINvtc6-RJsdz9QGGhRK2dT3NtpOIjqTs1WhJL0ZlyaWfSyLA1IvNp41XVLIejjaCLWGGt7pIDWcFBh1mU-onvato1"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">David Chen</p>
                                <p className="text-white/70 text-xs">Master Electrician</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 overflow-y-auto bg-white relative z-10">
                    <div className="w-full max-w-[440px] flex flex-col gap-8">
                        {/* Mobile Header */}
                        <div className="md:hidden flex items-center gap-3 mb-4">
                            <div className="size-8 text-[#135bec]">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                    <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#111318] text-lg font-bold">ServiceLink</h2>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-[#111318] tracking-tight">Welcome back</h3>
                            <p className="text-[#616f89]">Please enter your details to sign in.</p>
                        </div>

                        {/* Toggle Role */}
                        <div className="flex p-1 bg-[#f6f6f8] rounded-xl">
                            <label className="flex-1 relative cursor-pointer group">
                                <input defaultChecked className="peer sr-only" name="role" type="radio" value="professional" />
                                <div className="py-2.5 px-4 text-center text-sm font-semibold rounded-[10px] text-[#616f89] transition-all duration-200 peer-checked:bg-white peer-checked:text-[#111318] peer-checked:shadow-sm">
                                    Service Professional
                                </div>
                            </label>
                            <label className="flex-1 relative cursor-pointer group">
                                <input className="peer sr-only" name="role" type="radio" value="admin" />
                                <div className="py-2.5 px-4 text-center text-sm font-semibold rounded-[10px] text-[#616f89] transition-all duration-200 peer-checked:bg-white peer-checked:text-[#111318] peer-checked:shadow-sm">
                                    User
                                </div>
                            </label>
                        </div>

                        {/* Form */}
                        <form action={formAction} className="flex flex-col gap-5">
                            {state?.error && (
                                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                                    {state.error}
                                </div>
                            )}

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-[#111318]" htmlFor="email">Email Address</label>
                                <div className="relative">
                                    <input required className="w-full h-12 px-4 bg-[#f6f6f8] border border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none placeholder:text-[#616f89]/50 text-[#111318]" id="email" name="email" placeholder="name@example.com" type="email" />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#616f89] pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-[#111318]" htmlFor="password">Password</label>
                                <div className="relative">
                                    <input required minLength={6} className="w-full h-12 px-4 bg-[#f6f6f8] border border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none placeholder:text-[#616f89]/50 text-[#111318]" id="password" name="password" placeholder="••••••••" type="password" />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#616f89] hover:text-[#111318] transition-colors" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <Link href="#" className="text-sm font-semibold text-[#135bec] hover:text-[#0f4bc4] transition-colors">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Sign In Button */}
                            <button disabled={isPending} className="w-full h-12 bg-[#135bec] hover:bg-[#0f4bc4] disabled:bg-[#135bec]/50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-[#135bec]/30 active:scale-[0.98] transition-all hover:cursor-pointer" type="submit">
                                {isPending ? "Signing In..." : "Sign In"}
                            </button>

                            {/* Divider */}
                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-[#616f89]">Or continue with</span>
                                </div>
                            </div>

                            {/* Google Button */}
                            <button className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#111318] font-semibold rounded-xl transition-all active:scale-[0.98] hover:cursor-pointer" type="button">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                Sign in with Google
                            </button>
                        </form>

                        <div className="text-center pt-2">
                            <p className="text-sm text-[#616f89]">
                                Don't have an account?{' '}
                                <Link className="font-semibold text-[#135bec] hover:text-[#0f4bc4] transition-colors" href="/signup">
                                    Become a Professional
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="mt-12 text-center text-xs text-[#616f89]/70 flex gap-6 justify-center">
                        <Link className="hover:text-[#111318] transition-colors" href="#">Privacy Policy</Link>
                        <Link className="hover:text-[#111318] transition-colors" href="#">Terms of Service</Link>
                        <Link className="hover:text-[#111318] transition-colors" href="#">Help Center</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

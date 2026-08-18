import { Link } from "react-router"
import UseAuth from "../hooks/UseAuth"


const Auth = () => {

  const {phone, otp, hasSentOtp, handlePhoneChange, handleOtpChange, handleSubmit} = UseAuth()

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
          <header className="text-center flex items-center justify-center flex-col gap-2">
            <h1 className="font-bold text-[#2A2D53] text-xl">Welcome back</h1>
    
            <div className="flex font-medium items-center gap-1 text-sm text-neutral-500">
              <span>Sign up | Sign in</span>
            </div>
          </header>
    
          <main className="space-y-3">

            {
              hasSentOtp ? <div className="flex items-center justify-center gap-1">
              <input
                className="auth-input text-center"
                type="text"
                dir="ltr"
                placeholder="Verification Code"
                value={otp}
                onChange={handleOtpChange}
              />
            </div> :
             (<>
             <p className="text-xs font-normal text-neutral-600">
             please enter your phone number
            </p>
            <input className="auth-input" dir="ltr" placeholder="0912 ..." value={phone} onChange={handlePhoneChange} />
            </>
                    )}
            
    
            
          </main>
          <footer className="space-y-3 flex items-center justify-center flex-col">
            <button className="h-10 text-sm flex items-center w-full duration-150 hover:bg-[#2A2D53]/80 cursor-pointer justify-center bg-[#2A2D53] text-white rounded-lg focus-within:ring-4 ring-blue-500/40 active:scale-100! hover:scale-103 hover:shadow-lg shadow-blue-500/30">
             {hasSentOtp ? "Verify Code" :"Send Code"}
            </button>
            <div className="space-y-1 text-center mt-4">
              <p className="text-center text-xs text-zinc-500">
               By signing up, you agree to the website's terms and conditions.
              </p>
              <Link
                className="text-blue-500 text-center mx-auto max-w-max! text-xs"
                to={"/"}
              >
               Return
              </Link>
            </div>
          </footer>
        </form>
  )
}

export default Auth
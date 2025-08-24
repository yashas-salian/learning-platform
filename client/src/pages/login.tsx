import React, { useEffect, useState, type JSX } from "react";

export default function AITutorSlidingAuth(): JSX.Element {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const aiMessages = {
    welcome:
      "Welcome to the future of learning! I'm your AI tutor, ready to personalize your educational journey.",
    signIn:
      "Great to see you back! I've been analyzing new learning patterns to enhance your experience.",
    signUp:
      "Exciting! Let's create your personalized AI learning profile. I'll adapt to your unique learning style.",
    processing: "My neural networks are processing your information...",
    success:
      "Perfect! Your AI learning environment is now optimized for maximum knowledge absorption!",
  } as const;

  useEffect(() => {
    setAiMessage(aiMessages.welcome);
    setShowMessage(true);
  }, []);

  const handleSignInChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setAiMessage(aiMessages.processing);

    await new Promise((resolve) => setTimeout(resolve, 2500));

    setAiMessage(
      `Welcome back! I've prepared personalized lessons based on your learning history. Ready to continue your journey? 🚀`
    );
    setIsProcessing(false);

    setTimeout(() => {
      setSignInData({ email: "", password: "" });
      setAiMessage(aiMessages.welcome);
    }, 4000);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setAiMessage(aiMessages.processing);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (signUpData.password !== signUpData.confirmPassword) {
      setAiMessage("Password mismatch detected! Let me help you fix that. 🤖");
      setIsProcessing(false);
      return;
    }

    setAiMessage(
      `Welcome ${signUpData.name}! 🎉 I've created your AI learning profile. Your personalized curriculum is ready!`
    );
    setIsProcessing(false);

    setTimeout(() => {
      setSignUpData({ name: "", email: "", password: "", confirmPassword: "" });
      setAiMessage(aiMessages.welcome);
    }, 5000);
  };

  const togglePanel = (): void => {
    setIsSignUp((prev) => !prev);
    setAiMessage(!isSignUp ? aiMessages.signUp : aiMessages.signIn);
    setShowMessage(true);
  };

  return (
        <div className="min-h-screen flex items-center justify-center p-4 relative font-[Poppins] bg-gradient-to-br from-blue-700 to-blue-900 overflow-hidden">
      {/* Animated Particles */}
      <div className="particles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Main Container */}
      <div
        className={`auth-container container ${isSignUp ? "right-panel-active" : ""}`}
      >
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form className="ai-form" onSubmit={handleSignUp}>
            <div className="ai-avatar">🧠</div>
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Create AI Profile</h1>
            <input
              className="ai-input"
              type="text"
              name="name"
              placeholder="Full Name"
              value={signUpData.name}
              onChange={handleSignUpChange}
              required
            />
            <input
              className="ai-input"
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              required
            />
            <input
              className="ai-input"
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              required
            />
            <input
              className="ai-input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={handleSignUpChange}
              required
            />
            <button className="ai-button mt-4" type="submit" disabled={isProcessing}>
              {isProcessing ? "Creating Profile..." : "Start Learning"}
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form className="ai-form" onSubmit={handleSignIn}>
            <div className="ai-avatar">🤖</div>
            <h1 className="text-2xl font-semibold text-black mb-4">Welcome Back</h1>
            <p className="text-blue-600 mb-6">Continue your AI-powered learning journey</p>
            <input
              className="ai-input"
              type="email"
              name="email"
              placeholder="Email"
              value={signInData.email}
              onChange={handleSignInChange}
              required
            />
            <input
              className="ai-input"
              type="password"
              name="password"
              placeholder="Password"
              value={signInData.password}
              onChange={handleSignInChange}
              required
            />
            <a
              href="#"
              className="text-sm text-blue-700 hover:text-blue-900 mb-4 block"
            >
              Forgot your password?
            </a>
            <button className="ai-button" type="submit" disabled={isProcessing}>
              {isProcessing ? "Authenticating..." : "Continue Learning"}
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-3xl font-bold mb-4 neon-glow text-black">Welcome Back!</h1> <br></br>
              <p className="mb-6 text-lg">
                Your AI tutor has been waiting! Continue your personalized learning journey.
              </p>
              <br></br>
              <button className="ai-button ghost-button" onClick={togglePanel}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text-3xl font-bold mb-4 neon-glow">Start Your Journey!</h1><br></br>
              <p className="mb-6 text-lg">
                Join thousands of learners using AI-powered education to achieve their goals.
              </p>
              <br></br>
              <button className="ai-button ghost-button" onClick={togglePanel}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm border border-white/20">
          ⚡ AI Tutor Demo - Experience Next-Gen Learning
        </div>
      </div>

      {/* Updated Styles */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .particles { position: absolute; inset: 0; overflow: hidden; }
        .particle { position: absolute; background: rgba(255,255,255,0.1); animation: float 8s infinite linear; }
        .particle:nth-child(1) { width: 20px; height: 20px; left: 10%; animation-delay: 0s; border-radius: 50%; }
        .particle:nth-child(2) { width: 15px; height: 15px; left: 20%; animation-delay: 2s; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
        .particle:nth-child(3) { width: 25px; height: 25px; left: 30%; animation-delay: 4s; clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }
        .particle:nth-child(4) { width: 18px; height: 18px; left: 40%; animation-delay: 1s; border-radius: 50%; }
        .particle:nth-child(5) { width: 22px; height: 22px; left: 60%; animation-delay: 3s; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
        .particle:nth-child(6) { width: 16px; height: 16px; left: 70%; animation-delay: 5s; border-radius: 50%; }
        .particle:nth-child(7) { width: 20px; height: 20px; left: 80%; animation-delay: 1.5s; clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }
        .particle:nth-child(8) { width: 14px; height: 14px; left: 90%; animation-delay: 3.5s; border-radius: 50%; }

        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .auth-container { position: relative; width: 900px; height: 600px; background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); overflow: hidden; }
        .form-container { position: absolute; top: 0; height: 100%; transition: all 0.6s ease-in-out; }
        .sign-in-container { left: 0; width: 50%; z-index: 2; }
        .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }
        .container.right-panel-active .sign-in-container { transform: translateX(100%); }
        .container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

        @keyframes show { 0%,49.99% { opacity: 0; z-index: 1; } 50%,100% { opacity: 1; z-index: 5; } }

        .overlay-container { position: absolute; top: 0; left: 50%; width: 50%; height: 100%; overflow: hidden; transition: transform 0.6s ease-in-out; z-index: 100; }
        .container.right-panel-active .overlay-container { transform: translateX(-100%); }
        .overlay { background: linear-gradient(135deg, #001f4d 0%, #003366 100%); color: #fff; position: relative; left: -100%; height: 100%; width: 200%; transform: translateX(0); transition: transform 0.6s ease-in-out; }
        .container.right-panel-active .overlay { transform: translateX(50%); }
        .overlay-panel { position: absolute; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%; transform: translateX(0); transition: transform 0.6s ease-in-out; }
        .overlay-left { transform: translateX(-20%); }
        .container.right-panel-active .overlay-left { transform: translateX(0); }
        .overlay-right { right: 0; transform: translateX(0); }
        .container.right-panel-active .overlay-right { transform: translateX(20%); }

        .ai-form { background: rgba(255,255,255,0.95); display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 0 50px; height: 100%; text-align: center; color: #0a2079ff; }
        .ai-input { background: rgba(0,31,77,0.1); border: 2px solid rgba(0,31,77,0.3); border-radius: 12px; padding: 15px 20px; margin: 8px 0; width: 100%; font-size: 14px; transition: all 0.3s ease; color: #333; }
        .ai-input:focus { outline: none; border-color: #001f4d; box-shadow: 0 0 0 3px rgba(0,31,77,0.1); transform: translateY(-2px); }
        .ai-button { border-radius: 20px; border: none; background: linear-gradient(135deg, #001f4d 0%, #003366 100%); color: #e6e9efff; font-size: 14px; font-weight: 600; padding: 15px 45px; letter-spacing: 1px; text-transform: uppercase; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden; }
        .ai-button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,31,77,0.3); }
        .ai-button::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s; }
        .ai-button:hover::before { left: 100%; }
        .ghost-button { background: transparent; border: 2px solid #fff; color: #fff; }
        .ghost-button:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
        .ai-avatar { width: 80px; height: 80px; background: linear-gradient(135deg, #001f4d 0%, #003366 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 20px; animation: pulse 2s infinite; box-shadow: 0 10px 30px rgba(0,31,77,0.3); }
        @keyframes pulse { 0%{ transform: scale(1); box-shadow: 0 10px 30px rgba(0,31,77,0.3);} 50%{ transform: scale(1.05); box-shadow: 0 15px 40px rgba(234, 234, 234, 0.5);} 100%{ transform: scale(1); box-shadow: 0 10px 30px rgba(0,31,77,0.3);} }
        .typing-animation { display: inline-flex; align-items: center; }
        .typing-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; margin: 0 2px; animation: typing 1.4s infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%,60%,100% { transform: translateY(0);} 30% { transform: translateY(-10px);} }
        .ai-message { background: linear-gradient(135deg, rgba(0,31,77,0.1) 0%, rgba(0,51,102,0.1) 100%); border: 1px solid rgba(0,31,77,0.2); border-radius: 15px; padding: 15px; margin: 15px 0; animation: slideIn 0.5s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
        .neon-glow { text-shadow: 0 0 10px rgba(255,255,255,0.5); }

        @media (max-width: 768px) {
          .auth-container { width: 100%; height: 100vh; border-radius: 0; }
          .ai-form { padding: 0 30px; }
          .overlay-panel { padding: 0 20px; }
        }
      `}</style>
    </div>
  );
}



import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loginHovered, setLoginHovered] = useState(false);
  const [createHovered, setCreateHovered] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Login attempt:", { username, password });
  };

  const handleCreateAccount = () => {
    setShowErrorModal(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        paddingBottom: 0,
        backgroundColor: "#1C2B33",
        minHeight: "100vh",
      }}
    >
      {/* Language Selector */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 0",
          cursor: "pointer",
          transition: "opacity 0.2s ease",
        }}
        role="button"
        tabIndex={0}
        aria-label="English (US)"
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.7";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400,
            color: "rgb(203, 210, 217)",
            letterSpacing: "-0.04px",
            lineHeight: 1.43,
          }}
        >
          English (US)
        </div>
      </div>

      {/* Instagram Logo Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          flexShrink: 100,
          marginTop: 0,
          marginBottom: "20px",
          pointerEvents: "none",
        }}
      >
        <img
          alt="Instagram from Meta"
          src="https://static.cdninstagram.com/rsrc.php/v4/yk/r/iyazeqxfbpL.png"
          style={{
            maxHeight: "60px",
            minHeight: 0,
            objectFit: "contain",
            overflow: "hidden",
          }}
          role="heading"
        />
      </div>

      {/* Form Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          pointerEvents: "none",
          width: "100%",
          maxWidth: "350px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        {/* Username Input */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0)",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  padding: "10px 16px",
                  backgroundColor: "rgb(28, 43, 51)",
                  border: usernameFocused ? "1px solid rgb(0, 100, 224)" : "1px solid rgb(70, 90, 105)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  pointerEvents: "auto",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Placeholder Label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    opacity: username || usernameFocused ? 0 : 1,
                    paddingRight: 0,
                    transition: "opacity 0.2s ease",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontFamily: '"Optimistic Text Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      color: "rgb(133, 149, 164)",
                      lineHeight: 1.3,
                      display: "block",
                      overflow: "hidden",
                    }}
                  >
                    Username, email or mobile number
                  </div>
                </div>

                {/* Input Field */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    pointerEvents: "none",
                  }}
                >
                  <input
                    type="email"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setUsernameFocused(true)}
                    onBlur={() => setUsernameFocused(false)}
                    placeholder=""
                    dir="auto"
                    autoCapitalize="off"
                    autoComplete="on"
                    autoCorrect="off"
                    aria-label="Username, email or mobile number"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "rgb(255, 255, 255)",
                      fontFamily: '"Optimistic Text Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: "16px",
                      lineHeight: 1.3,
                      caretColor: "rgb(255, 255, 255)",
                      minHeight: "22px",
                      outline: "none",
                      width: "100%",
                      pointerEvents: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Input */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
            marginBottom: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0)",
              display: "flex",
              flexDirection: "column",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  padding: "10px 16px",
                  backgroundColor: "rgb(28, 43, 51)",
                  border: passwordFocused ? "1px solid rgb(0, 100, 224)" : "1px solid rgb(70, 90, 105)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  pointerEvents: "auto",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Placeholder Label */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    opacity: password || passwordFocused ? 0 : 1,
                    paddingRight: 0,
                    transition: "opacity 0.2s ease",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontFamily: '"Optimistic Text Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      color: "rgb(133, 149, 164)",
                      lineHeight: 1.3,
                      display: "block",
                      overflow: "hidden",
                    }}
                  >
                    Password
                  </div>
                </div>

                {/* Input Field */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    pointerEvents: "none",
                  }}
                >
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholder=""
                    dir="auto"
                    autoCapitalize="off"
                    autoComplete="on"
                    autoCorrect="off"
                    aria-label="Password"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "rgb(255, 255, 255)",
                      fontFamily: '"Optimistic Text Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: "16px",
                      lineHeight: 1.3,
                      caretColor: "rgb(255, 255, 255)",
                      minHeight: "22px",
                      outline: "none",
                      width: "100%",
                      pointerEvents: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Log In Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "center",
            marginTop: "12px",
            pointerEvents: "none",
          }}
        >
          <div style={{ flexGrow: 1, cursor: "pointer", pointerEvents: "auto" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                opacity: 1,
                transform: "scaleX(1) scaleY(1)",
                pointerEvents: "inherit",
              }}
            >
              <button
                type="submit"
                onClick={handleLogin}
                onMouseEnter={() => setLoginHovered(true)}
                onMouseLeave={() => setLoginHovered(false)}
                tabIndex={0}
                role="button"
                aria-label="Log in"
                data-anchor-id="replay"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "22px",
                  pointerEvents: "inherit",
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                  padding: 0,
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    height: "44px",
                    minWidth: "44px",
                    flexGrow: 1,
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    backgroundColor: loginHovered ? "rgb(30, 130, 255)" : "rgb(0, 100, 224)",
                    border: "0px solid rgb(28, 43, 51)",
                    borderRadius: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    opacity: 1,
                    pointerEvents: "none",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      opacity: 1,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        letterSpacing: "-0.08px",
                        color: "rgb(255, 255, 255)",
                        lineHeight: 1.248,
                        display: "block",
                        textAlign: "start",
                        overflow: "hidden",
                      }}
                    >
                      Log in
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Forgot Password Button */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "12px",
            paddingBottom: 0,
            pointerEvents: "none",
          }}
        >
          <div style={{ flexGrow: 1, cursor: "pointer", pointerEvents: "auto" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                opacity: 1,
                pointerEvents: "inherit",
              }}
            >
              <button
                tabIndex={0}
                role="button"
                aria-label="Forgot password?"
                data-anchor-id="replay"
                onClick={() => {
                  // Navigate to forgot password page
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 0,
                  pointerEvents: "inherit",
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                  padding: 0,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <div style={{ pointerEvents: "none" }}>
                  <div style={{ height: "36px", paddingLeft: "16px", paddingRight: "16px" }}>
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        opacity: 1,
                        pointerEvents: "inherit",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "center",
                          pointerEvents: "inherit",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              height: "100%",
                              width: "100%",
                              opacity: 1,
                              pointerEvents: "inherit",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                height: "100%",
                                width: "100%",
                                flexDirection: "row",
                                pointerEvents: "inherit",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "16px",
                                  fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  letterSpacing: "-0.08px",
                                  color: "rgb(255, 255, 255)",
                                  lineHeight: 1.248,
                                  display: "block",
                                  textAlign: "start",
                                  overflow: "hidden",
                                }}
                              >
                                Forgot password?
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Create Account Button */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flexGrow: 1,
          flexShrink: 1000000,
          paddingBottom: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            pointerEvents: "none",
            width: "100%",
            maxWidth: "350px",
            margin: "0 auto",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <div style={{ flexGrow: 1, cursor: "pointer", pointerEvents: "auto" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                transform: "scaleX(1) scaleY(1)",
                opacity: 1,
                pointerEvents: "inherit",
              }}
            >
              <button
                tabIndex={0}
                role="button"
                aria-label="Create new account"
                data-anchor-id="replay"
                onClick={() => {
                  // Navigate to signup page
                }}
                onMouseEnter={() => setCreateHovered(true)}
                onMouseLeave={() => setCreateHovered(false)}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "22px",
                  pointerEvents: "inherit",
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                  padding: 0,
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    height: "44px",
                    minWidth: "44px",
                    flexGrow: 1,
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    backgroundColor: createHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0)",
                    border: createHovered ? "1px solid rgb(100, 173, 254)" : "1px solid rgb(69, 153, 254)",
                    borderRadius: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    opacity: 1,
                    pointerEvents: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      opacity: 1,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        letterSpacing: "-0.08px",
                        color: createHovered ? "rgb(100, 173, 254)" : "rgb(71, 165, 250)",
                        lineHeight: 1.248,
                        display: "block",
                        textAlign: "start",
                        overflow: "hidden",
                        transition: "color 0.2s ease",
                      }}
                    >
                      Create new account
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Meta Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              height: "12px",
              aspectRatio: "5 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt=""
              src="https://static.cdninstagram.com/rsrc.php/v4/yp/r/eJmGMdNKxpD.png"
              style={{
                height: "100%",
                width: "100%",
                pointerEvents: "inherit",
                maskImage: "url('https://static.cdninstagram.com/rsrc.php/v4/yM/r/DDgwTv3JehF.png')",
                maskSize: "contain",
                backgroundColor: "rgb(203, 210, 217)",
                objectPosition: "10000px 10000px",
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

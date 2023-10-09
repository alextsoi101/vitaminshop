import React from "react";

const ScreenWidthErrorPage = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        padding: '30px',
        width: '100vw',
        color: '#1A1E26', 
        fontSize: '20px', 
        fontWeight: '500',
        textAlign: 'center',
      }}
    >
      <div>
        Use desktop devices to access Admin panel.
      </div>
      <div
        style={{
          marginTop: '30px',
          fontWeight: '500',
        }}
      >
        Minimum screen width <span style={{fontWeight: '700'}}>1000px</span>.
      </div>
    </div>
  )
}

export default ScreenWidthErrorPage;
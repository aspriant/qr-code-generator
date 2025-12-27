import { useState } from 'react';
import QRCode from 'qrcode'
import './App.css';
export default function App() {
  const [text, setText] = useState('');
  const [qr, setQr] = useState('');
  const generateQR = async () => {
    if (!text) return;
    try {
      const qrImage = await QRCode.toDataURL(text);
      console.log(qrImage);
      setQr(qrImage);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };
  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="Enter text to generate QR code"
       value={text} 
       onChange={(e) => setText(e.target.value)} />
      <button onClick={generateQR}>Generate QR Code</button>
      {qr && (<div className='qr-box'><img src={qr} alt="QR Code" />
      <a href={qr} download="qrcode.png">Download QR Code</a></div>
      )}
    </div>
  );
}
import React from "react";

function Workingbody() {
  return (
    <>
    <div className="min-h-screen bg-[#FCDFE9] flex justify-center items-center px-4 py-12 text-[#562B33]">
  <div className="max-w-5xl w-full space-y-8 ">
    
    <div>
      <h1 className="text-3xl font-semibold mb-2">🔍 How It Works</h1>
      <p className="leading-relaxed">
        <strong>Code 39</strong> is a widely used 1D barcode format known for its simplicity and compatibility with most scanners and software.
      </p>
    </div>

    <div className="border-t border-[#562B33]/20 pt-6 space-y-4">
      <h2 className="text-xl font-medium">💡 What is Code 39?</h2>
      <p className="leading-relaxed">
        Code 39 encodes alphanumeric characters and is used in inventory systems, ID cards, logistics, military and government applications.
      </p>
    </div>

    <div className="space-y-3">
      <h2 className="text-xl font-medium">✅ Supported Characters</h2>
      <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
        <li><strong>Letters:</strong> A–Z (uppercase only)</li>
        <li><strong>Numbers:</strong> 0–9</li>
        <li><strong>Symbols:</strong> <code>-</code>, <code>.</code>, space, <code>$</code>, <code>/</code>, <code>+</code>, <code>%</code></li>
        <li><strong>Special character:</strong> <code>*</code> (used internally to mark start and end)</li>
      </ul>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">📸 Example</h2>
      <p className="text-sm leading-relaxed">
        A barcode for <code>*HELLO-123*</code> encodes the text <code>HELLO-123</code>. The asterisks are not part of the decoded result.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">🔐 Privacy</h2>
      <p className="text-sm leading-relaxed">
        This app works <strong>locally in your browser</strong>. Your image never leaves your device—safe, private, and secure.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">🧪 How to Use</h2>
      <ul className="list-decimal list-inside text-sm leading-relaxed space-y-1">
        <li>Upload or drag & drop your barcode image.</li>
        <li>It’s decoded instantly as a Code 39 barcode.</li>
        <li>Copy the decoded text with one click.</li>
      </ul>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">❌ Limitations</h2>
      <p className="text-sm leading-relaxed">
        Lowercase letters, emojis, and characters like <code>@</code>, <code>&</code>, <code>#</code> are not supported.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">🔄 Future Support</h2>
      <p className="text-sm leading-relaxed">
        Currently supports only Code 39. Formats like QR, Code 128, and EAN may be added later.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl font-medium">📥 Try a Sample</h2>
      <p className="text-sm leading-relaxed">
        Scan a Code 39 barcode with text: <code>TEST-2025</code>.
      </p>
    </div>

    <hr className="border-[#562B33]/20" />
    <p className="text-center text-sm text-[#562B33]/80 mt-4">
      Clean, fast, and private Code 39 decoding—built for simplicity.
    </p>
  </div>
</div>


    </>
  );
}

export default Workingbody;

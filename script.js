function chat() {
  alert("🚀 AI Chat is coming soon!");
}

async function image() {
  const prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please enter a prompt.");
    return;
  }

  const result = document.getElementById("result");
  result.innerHTML = "<h3>⏳ Generating image...</h3>";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error("Image generation failed");
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    result.innerHTML = `
      <h3>✅ AI Generated Image</h3>
      <img src="${imageUrl}" style="max-width:100%;border-radius:10px;">
    `;
  } catch (err) {
    result.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}

function video() {
  alert("🎥 AI Video feature coming soon!");
}

function photo() {
  alert("📷 Photo Editor coming soon!");
}

function editvideo() {
  alert("🎬 Video Editor coming soon!");
}
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("submitting");

  const requiredFields = ['name', 'email'];
  const newErrors = {};

  requiredFields.forEach((name) => {
    const value = formData[name];
    if (!value.trim()) newErrors[name] = "This field is required";
  });

  setFormErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    setStatus("idle");
    return;
  }

  // sanitize
  const sanitizeInput = (str) => {
    const temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML.trim();
  };

  const safeData = {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    message: sanitizeInput(formData.message),
  };

  try {
    const response = await fetch("https://apiforms.com/api/forms/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apikey: "aef0b7fc-96a1-4753-9e9d-1a5608853e41", // temporarily kept, but should move to backend
        formId: "Xmfd78xRQ6sNtebENwds",
        formData: safeData,
      }),
    });

    if (!response.ok) throw new Error("Form submission failed");

    setStatus("success");
    alert("Form submitted successfully!");
    setFormData(initialValues);
  } catch (err) {
    console.error("Submission error:", err);
    setStatus("error");
    alert("Oops! Something went wrong. Please try again later.");
  }
};

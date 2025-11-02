import { useState } from 'react'

export default function Contact() {
  const initialValues = {
    name: '',
    email: '',
    message: '' 
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value === "" ? "" : Number(value)
          : value,
    }));
  };

    const handleCheckboxGroupChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const requiredFields = ['name', 'email'];
    const newErrors = {};

    requiredFields.forEach((name) => {
      const value = formData[name];
      if (
        value === "" ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "boolean" && !value)
      ) {
        newErrors[name] = "This field is required";
      }
    });

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("https://apiforms.com/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apikey: "aef0b7fc-96a1-4753-9e9d-1a5608853e41",
          formId: "Xmfd78xRQ6sNtebENwds",
          formData: {
            name: formData.name,
            email: formData.email
          }
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Form submission failed");
      }

      setStatus("success");
      alert("Form submitted successfully!");
      setFormData(initialValues);
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert(err.message || "Error submitting form");
    }
  };

  return (
    <div className="bg-[#0B685C] text-4xl ">
      <div className="relative flex flex-col items-center ">
        <div className="text-[#B08585] lg:text-[250px] md:[200px] text-[70px]">
          contact me
        </div>
        <div className="text-[#B08585] lg:text-[250px] md:[200px] text-[70px]">
          contact me
        </div>
        <div className="text-[#B08585] lg:text-[250px] md:[200px] text-[70px]">
          contact me
        </div>

        <div className="container bg-[#DF7E7E] absolute mx-auto mt-60 justify-center items-center lg:w-120 rounded-3xl">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 p-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="space-y-1 bg-">
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Message 
            </label>
            <textarea 
              name="message"
              value={formData.message}

              className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
  
              onChange={(e) => handleChange(e)}
            ></textarea>
            {formErrors.message && (
          <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
        )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#000000] text-white rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      </div>

      
    </div>
  );
}

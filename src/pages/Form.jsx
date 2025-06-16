import ChildDetails from "../components/childDetails";
import Serviceneeds from "../components/serviceNeeds";
import ContactInfo from "../components/contactInfo";
import FormSubmitted from "../components/formSubmitted";
import { useState } from "react";

const Multistepform = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState("forward");

  const [formData, setFormData] = useState({
    age: "",
    diagnosis: "",
    schoolType: "",
    supportTypes: [],
    frequency: "",
    requirements: "",
    parentsName: "",
    email: "",
    phone: "",
  })

  const nextStep = () => {
    setDirection("forward");
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection("backward");
    setCurrentStep((prev) => prev - 1);
  };

  const animationClass = direction === "forward"
    ? "animate-slide-in-right"
    : "animate-slide-in-left";


  const steps = [

    <ChildDetails
      key="childDetails"
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
    />,
    <Serviceneeds
      key="serviceNeeds"
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <ContactInfo
      key="contactInfo"
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <FormSubmitted key="formSubmitted" />


  ]

  return (
    <>
      <div key={currentStep} className={`${animationClass} overflow-x-hidden`}> {steps[currentStep]} </div>
    </>
  )
}

export default Multistepform;
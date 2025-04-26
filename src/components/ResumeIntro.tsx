"use client";

import React, { useState } from "react";
import ResumeProtectedContent from "./ResumeProtectedContent";
import ResumePasswordForm from "./ResumePasswordForm";

const ResumeIntro = () => {
  const [hasAccess, setHasAccess] = useState(false);

  if (!hasAccess) {
    return <ResumePasswordForm onAccessGranted={() => setHasAccess(true)} />;
  }

  return <ResumeProtectedContent />;
};

export default ResumeIntro;

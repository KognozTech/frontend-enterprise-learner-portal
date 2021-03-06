import React, { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import { CourseContext } from '../../CourseContextProvider';

const EnrollBtnDisabled = () => {
  const { enterpriseConfig } = useContext(AppContext);
  const { state: courseData } = useContext(CourseContext);
  return (
    <a href={`${process.env.LMS_BASE_URL}/enterprise/${enterpriseConfig.uuid}/course/${courseData.activeCourseRun.key}/enroll`}>Enroll Now</a>
  );
};
export default EnrollBtnDisabled;

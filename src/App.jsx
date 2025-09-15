import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NewsAndEvents from './pages/NewsAndEvents'
import Login from './pages/Login'
import AdminDashBoard from './pages/AdminDashBoard'
import StudentsDashboard from './pages/StudentsDashboard'
import Teacher from './pages/Teacher'
import Parents from './pages/Parents'
import Layout from './layouts/Layout'
import DashBoardLayout from './layouts/DashBoardLayout'
import Classes from './pages/Classes'
import StudentAttendance from './pages/StudentAttendance'
import StudentResult from './pages/StudentResult'
import ManageStudents from './pages/ManageStudents'
import ManageTeachers from './pages/ManageTeachers'
import ManageParents from './pages/ManageParents'
import CreateEvent from './pages/CreateEvent'
import TeacherAttendance from './pages/TeacherAttendance'
import TeacherResult from './pages/TeacherResult'
import TeacherClasses from './pages/TeacherClasses'
import ResultId from './pages/ResultId'
import AttendanceId from './pages/AttendanceId'
import ChildResults from './pages/ChildsResults'
import ChildResultId from './pages/ChildResultId'
import ChildAttendance from './pages/ChildAttendance'
import ChildAttendanceId from './pages/ChildAttendanceId'
import Teacherdetails from './pages/Teacherdetails'
import ParentDetails from './pages/ParentDetails'
import StudentDetails from './pages/StudentDetails'
import Profile from './pages/Profile'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='news-and-events' element={<NewsAndEvents />} />
          <Route path='login' element={ <Login />} />
        </Route>
        <Route element={<DashBoardLayout />}>
          <Route path='dashboard/admin' element={ <AdminDashBoard />} />
          <Route path='dashboard/manage/students' element={ <ManageStudents />} />
          <Route path='dashboard/manage/students/:id' element={ <StudentDetails />} />
          <Route path='dashboard/manage/teachers' element={ <ManageTeachers />} />
          <Route path='dashboard/manage/teachers/:id' element={ <Teacherdetails />} />
          <Route path='dashboard/manage/parents' element={ <ManageParents />} />
          <Route path='dashboard/manage/parents/:id' element={ <ParentDetails />} />
          <Route path='dashboard/create-event' element={ <CreateEvent />} />
                {/* students routes */}
          <Route path='dashboard/students' element={ <StudentsDashboard />} />
          <Route path='dashboard/classes' element={ <Classes />} />
          <Route path='dashboard/attendance' element={ <StudentAttendance />} />
          <Route path='dashboard/results' element={ <StudentResult />} />
                {/* teachers routes */}
          <Route path='dashboard/teachers' element={ <Teacher />} />
          <Route path='dashboard/teacher/classes' element={ <TeacherClasses />} />
          <Route path='dashboard/teacher/results' element={ <TeacherResult />} />
          <Route path='dashboard/teacher/results/:id' element={ <ResultId />} />
          <Route path='dashboard/teacher/attendance' element={ <TeacherAttendance />} />
          <Route path='dashboard/teacher/attendance/:id' element={ <AttendanceId />} />
                {/* parents routes */}  
          <Route path='dashboard/parents' element={ <Parents />} />
          <Route path='dashboard/child/results' element={ <ChildResults />} />
          <Route path='dashboard/child/results/:id' element={ <ChildResultId />} />
          <Route path='dashboard/child/attendance' element={ <ChildAttendance />} />
          <Route path='dashboard/child/attendance/:id' element={ <ChildAttendanceId />} />

          <Route path='dashboard/:id/profile' element={ <Profile />} />
          <Route path='*' element={ <div className='text-center mt-20 text-3xl font-bold'>404! Page Not Found</div>} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
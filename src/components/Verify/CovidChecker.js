const covidChecker = (id, posts) => {
  const getEmployee = (id) => {
    const copy = [...posts];
    return copy.filter((post) => post.employeeid === id);
  };
  const getOtherEmployee = (id) => {
    const copy = [...posts];
    return copy.filter((post) => post.employeeid !== id);
  };

  const getRemainingId = (id) => {
    const ids = [];
    getOtherEmployee(id).map((emp) =>
      emp.covidstat ? ids.push(emp.employeeid) : null
    );
    return ids;
  };

  const empMeetingTime = (id) => {
    const emp = [];
    getEmployee(id)[0].meetings.map((event) =>
      emp.push({
        start: new Date(event.startTime),
        end: new Date(event.endTime),
      })
    );
    return emp;
  };

  const empFloorandSection = (id) => {
    const emp = [];
    getEmployee(id)[0].meetings.map((event) =>
      emp.push(parseInt(`${event.floor}${event.section}`))
    );
    return emp;
  };

  const faschecker = (eid1, eid2) => {
    const e1 = empFloorandSection(eid1);
    const e2 = empFloorandSection(eid2);

    return e1.some((r) => e2.includes(r));
  };

  const compareTime = (time1, time2) => {
    if (time1.start > time2.start && time1.start < time2.end) {
      return true;
    } else if (time1.end > time2.start && time1.end < time2.end) {
      return true;
    } else if (time2.start > time1.start && time2.start < time1.end) {
      return true;
    } else if (time2.end > time1.start && time2.end < time1.end) {
      return true;
    } else return false;
  };

  const compareEmployeeTime = (eid1, eid2) => {
    const employee1 = empMeetingTime(eid1);
    const employee2 = empMeetingTime(eid2);

    for (let i = 0; i < employee1.length; i++) {
      for (let j = 0; j < employee2.length; j++) {
        if (compareTime(employee1[i], employee2[j])) {
          return true;
        }
      }
    }
    return false;
  };

  const remID = getRemainingId(id);
  for (let i = 0; i < remID.length; i++) {
    if (faschecker(id, remID[i])) {
      if (compareEmployeeTime(id, remID[i])) {
        return true;
      }
    }
  }
  return false;
};

export default covidChecker;

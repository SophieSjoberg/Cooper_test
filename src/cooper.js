function CooperTest(attr) {
  if (attr.gender == 'female') {
    if (attr.age >= 13 && attr.age <= 14) {
      if (attr.distance <= 1500) {
        return "Poor..";
      } if (attr.distance > 1500 && attr.distance <= 1599) {
        return "Below Average";
      } else if (attr.distance >= 1600 && attr.distance <= 1899) {
        return "Average";
      } else if (attr.distance >= 1900 && attr.distance <= 1999) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }

    if (attr.age >= 15 && attr.age <= 16) {
      if (attr.distance <= 1600) {
        return "Poor..";
      } else if (attr.distance > 1600 && attr.distance <= 1699) {
        return "Below Average";
      } else if (attr.distance >= 1700 && attr.distance <= 1999) {
        return "Average";
      } else if (attr.distance >= 2000 && attr.distance <= 2099) {
        return "Above Average";
      } else {
        return "Excellent!";
      }

      if (attr.age >= 17 && attr.age <= 19) {
        if (attr.distance <= 1700) {
          return "Poor..";
        } else if (attr.distance > 1700 && attr.distance <= 1799) {
          return "Below Average";
        } else if (attr.distance >= 1800 && attr.distance <= 2099) {
          return "Average";
        } else if (attr.distance >= 2100 && attr.distance <= 2299) {
          return "Above Average";
        }
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 20 && attr.age <= 29) {
      if (attr.distance <= 1500) {
        return "Poor..";
      } else if (attr.distance > 1500 && attr.distance <= 1799) {
        return "Below Average";
      } else if (attr.distance >= 1800 && attr.distance <= 2199) {
        return "Average";
      } else if (attr.distance >= 2200 && attr.distance <= 2699) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 30 && attr.age <= 39) {
      if (attr.distance <= 1400) {
        return "Poor..";
      } else if (attr.distance > 1400 && attr.distance <= 1699) {
        return "Below Average";
      } else if (attr.distance >= 1700 && attr.distance <= 1999) {
        return "Average";
      } else if (attr.distance >= 2000 && attr.distance <= 2499) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 40 && attr.age <= 49) {
      if (attr.distance <= 1200) {
        return "Poor..";
      } else if (attr.distance > 1200 && attr.distance <= 1499) {
        return "Below Average";
      } else if (attr.distance >= 1500 && attr.distance <= 1899) {
        return "Average";
      } else if (attr.distance >= 1900 && attr.distance <= 2299) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 50) {
      if (attr.distance <= 1100) {
        return "Poor..";
      } else if (attr.distance > 1100 && attr.distance <= 1399) {
        return "Below Average";
      } else if (attr.distance >= 1400 && attr.distance <= 1699) {
        return "Average";
      } else if (attr.distance >= 1700 && attr.distance <= 2199) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
  }
  if (attr.gender == 'male') {
    if (attr.age >= 13 && attr.age <= 14) {
      if (attr.distance <= 2100) {
        return "Poor..";
      } else if (attr.distance > 2100 && attr.distance <= 2199) {
        return "Below Average";
      } else if (attr.distance >= 2200 && attr.distance <= 2399) {
        return "Average";
      } else if (attr.distance >= 2400 && attr.distance <= 2699) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 15 && attr.age <= 16) {
      if (attr.distance <= 2200) {
        return "Poor..";
      } else if (attr.distance > 2200 && attr.distance <= 2299) {
        return "Below Average";
      } else if (attr.distance >= 2300 && attr.distance <= 2499) {
        return "Average";
      } else if (attr.distance >= 2500 && attr.distance <= 2799) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 17 && attr.age <= 19) {
      if (attr.distance <= 2300) {
        return "Poor..";
      } else if (attr.distance > 2300 && attr.distance <= 2499) {
        return "Below Average";
      } else if (attr.distance >= 2500 && attr.distance <= 2699) {
        return "Average";
      } else if (attr.distance >= 2700 && attr.distance <= 2999) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 20 && attr.age <= 29) {
      if (attr.distance <= 1600) {
        return "Poor..";
      } else if (attr.distance > 1600 && attr.distance <= 2199) {
        return "Below Average";
      } else if (attr.distance >= 2200 && attr.distance <= 2399) {
        return "Average";
      } else if (attr.distance >= 2400 && attr.distance <= 2799) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 30 && attr.age <= 39) {
      if (attr.distance <= 1500) {
        return "Poor";
      } else if (attr.distance > 1500 && attr.distance <= 1899) {
        return "Below Average";
      } else if (attr.distance >= 1900 && attr.distance <= 2299) {
        return "Average";
      } else if (attr.distance >= 2300 && attr.distance <= 2699) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 40 && attr.age <= 49) {
      if (attr.distance <= 1400) {
        return "Poor..";
      } else if (attr.distance > 1400 && attr.distancee <= 1699) {
        return "Below Average";
      } else if (attr.distance >= 1700 && attr.distance <= 2099) {
        return "Average";
      } else if (attr.distance >= 2100 && attr.distance <= 2499) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
    if (attr.age >= 50) {
      if (attr.distancee <= 1300) {
        return "Poor..";
      } else if (attr.distance > 1300 && attr.distance <= 1599) {
        return "Below Average";
      } else if (attr.distance >= 1600 && attr.distance <= 1999) {
        return "Average";
      } else if (attr.distance >= 2000 && attr.distance <= 2399) {
        return "Above Average";
      } else {
        return "Excellent!";
      }
    }
  }
}

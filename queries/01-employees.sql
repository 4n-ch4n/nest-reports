CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    work_time TIME NOT NULL,
    hours_per_day INT NOT NULL,
    work_schedule VARCHAR(50) NOT NULL
);

INSERT INTO employees (name, position, start_date, work_time, hours_per_day, work_schedule)
VALUES
('Juan Pérez', 'Developer', '2021-01-15', '09:00', 8, 'Monday to Friday, 9am - 5pm'),
('Ana Gómez', 'Designer', '2020-03-22', '10:00', 6, 'Monday to Friday, 10am - 4pm'),
('Carlos Sánchez', 'Manager', '2018-11-05', '08:00', 9, 'Monday to Friday, 8am - 5pm'),
('María López', 'Analyst', '2019-07-11', '09:30', 7, 'Monday to Friday, 9:30am - 4:30pm'),
('Pedro Rodríguez', 'Programmer', '2021-09-14', '11:00', 6, 'Monday to Friday, 11am - 5pm'),
('Lucía Fernández', 'Administrative Assistant', '2020-12-01', '08:30', 8, 'Monday to Friday, 8:30am - 4:30pm'),
('José Martínez', 'Accountant', '2017-05-19', '09:00', 8, 'Monday to Friday, 9am - 5pm'),
('Laura Ramírez', 'Developer', '2018-06-07', '10:00', 7, 'Monday to Friday, 10am - 5pm'),
('Miguel Torres', 'Technical Support', '2021-03-16', '09:00', 8, 'Monday to Friday, 9am - 5pm'),
('Sara Morales', 'Human Resources', '2019-09-23', '08:00', 7, 'Monday to Friday, 8am - 3pm'),
('David Vega', 'Developer', '2022-02-14', '09:30', 7, 'Monday to Friday, 9:30am - 4:30pm'),
('Elena Ortiz', 'Designer', '2021-11-10', '10:30', 6, 'Monday to Friday, 10:30am - 4:30pm'),
('Jorge Herrera', 'Manager', '2016-04-18', '08:00', 9, 'Monday to Friday, 8am - 5pm'),
('Isabel Domínguez', 'Analyst', '2019-02-05', '09:00', 8, 'Monday to Friday, 9am - 5pm'),
('Ricardo Ruiz', 'Programmer', '2020-10-22', '10:00', 7, 'Monday to Friday, 10am - 5pm'),
('Patricia Flores', 'Administrative Assistant', '2018-08-30', '08:30', 8, 'Monday to Friday, 8:30am - 4:30pm'),
('Roberto Castillo', 'Accountant', '2017-12-12', '09:00', 8, 'Monday to Friday, 9am - 5pm'),
('Adriana Reyes', 'Developer', '2021-06-25', '09:30', 7, 'Monday to Friday, 9:30am - 4:30pm'),
('Santiago García', 'Technical Support', '2020-01-13', '08:00', 8, 'Monday to Friday, 8am - 4pm'),
('Verónica Ríos', 'Human Resources', '2019-04-17', '09:00', 7, 'Monday to Friday, 9am - 4pm');

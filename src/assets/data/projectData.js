/* Import project thumbnails */
import VME from '../../assets/images/Virtual-Memory.webp';
import Knights from '../../assets/images/Knights.webp';
import uThread from '../../assets/images/uThread-Library.webp';
import serverThumb from '../../assets/images/HTTP-Server-Thumb.webp';
import droneSim from '../../assets/images/DroneSim.webp';
import thermo from '../../assets/images/THERMO.webp';

const projects = [
    {
        title: "Virtual-Memory-Emulation",
        description: "Developed a user-level demand-paged virtual memory system in C++, emulating kernel-level virtual memory mechanisms. \
        Optimized data transfer between disk and memory using memory-mapped files with mmap, remap_file_pages, and mprotect.",
        thumbnail: VME,
        githubUrl: "https://github.com/JacksonKary/Virtual-Memory-Emulation",
        highlights: ["C++", "Systems Programming", "Virtual Memory"]
    },
    {
        title: "Knightly Satire Website",
        description: "Evolved a full-stack website over six iterations. \
        Started with a basic Python server and raw HTML, then gradually introduced technologies like Node.js, Express.js, Pug, and MySQL. \
        This solidified core web development skills while equipping the system with new functionality.",
        thumbnail: Knights,
        githubUrl: "https://github.com/JacksonKary/WebProject",
        highlights: ["Node.js", "Express.js", "JavaScript", "MySQL", "HTML (Pug)", "CSS"]
    },
    {
        title: "uThread-Library",
        description: "Created a user-level thread library for uniprocessors in C++, similar in functionality to POSIX Threads. \
        Ensured memory safety with synchronization primitives, including locks, spinlocks, and condition variables. \
        Enhanced the system by implementing asynchronous I/O support for program responsiveness.",
        thumbnail: uThread,
        githubUrl: "https://github.com/JacksonKary/uThread-Library",
        highlights: ["C++", "Synchronization Primitives", "Asynchronous I/O", "Priority Inversion"]
    },
    {
        title: "HTTP Server (Multithreaded)",
        description: "Developed an HTTP server in C that supports multiple concurrent clients using a thread pool design pattern. \
        Implemented a connection queue with mutex locks to ensure thread safety and prevent memory corruption. \
        Built using Transmission Control Protocol (TCP), allowing persistent connections for clients.",
        thumbnail: serverThumb,
        githubUrl: "https://github.com/JacksonKary/Multithreaded-HTTP-Server",
        highlights: ["C", "HTTP", "TCP", "Threads", "Signal Handling"]
    },
    {
        title: "Drone “Uber” Simulation",
        description: "Implemented numerous design patterns in a 3D, interactive drone “Uber” simulation, containerized at various stages using Docker. \
        Simulates drones providing an Uber-like service for robots. \
        Successfully built the back end of the simulation in C++ using agile/scrum (Jira) as a team of three.",
        thumbnail: droneSim,
        githubUrl: "https://github.com/JacksonKary/DroneUberSimulation",
        highlights: ["C++", "Agile/Scrum (Jira)", "Design Patterns", "OOP", "Docker"]
    },
    {
        title: "Thermometer Firmware",
        description: "This firmware (written in C) could find itself onboard a digital thermometer. \
        It reads temperature information from physical sensors and displays the temperature in Fahrenheit or Celsius on the digital screen. \
        Includes an identical version written in X86-64 Assembly language.",
        thumbnail: thermo,
        githubUrl: "https://github.com/JacksonKary/Thermometer",
        highlights: ["C", "X86-Assembly", "Firmware", "Embedded Systems"]
    }
];

export default projects;